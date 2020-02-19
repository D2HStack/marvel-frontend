import React from "react";
import { Helmet } from "react-helmet";

function Characters(props) {
  //    const {} = props;
  return (
    <>
      <p>Welcome to Marvel Characters !</p>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Characters Page</title>
      </Helmet>
    </>
  );
}

export default Characters;
