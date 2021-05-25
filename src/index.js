import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalstyles";
import { theme } from "./theme/theme";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FirebaseContext.Provider value={{ firebase, FieldValue }}>
        <App />
      </FirebaseContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
