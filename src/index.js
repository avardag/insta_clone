import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { GlobalStyle } from "./globalstyles";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
