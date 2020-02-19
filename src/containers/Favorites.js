import React from "react";
import { Helmet } from "react-helmet";

function Favorites(props) {
  //    const {} = props;
  return (
    <>
      <p>Welcome to Marvel Favorites !</p>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Favorites Page</title>
      </Helmet>
    </>
  );
}

export default Favorites;
