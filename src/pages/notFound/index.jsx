import React, { useEffect } from "react";
import { NotFoundBG, NotFoundText } from "./notFound.styles";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);

  return (
    <NotFoundBG>
      <NotFoundText>Sorry, page not found !</NotFoundText>
    </NotFoundBG>
  );
}

export default NotFound;
