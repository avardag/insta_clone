import React, { useEffect } from "react";
import Header from "../../components/header";
import { NotFoundBG, NotFoundText } from "./notFound.styles";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);

  return (
    <div>
      <Header />
      <NotFoundBG>
        <NotFoundText>Sorry, page not found !</NotFoundText>
      </NotFoundBG>
    </div>
  );
}

export default NotFound;
