import React from "react";
import { Helmet } from "react-helmet";

function Comics(props) {
  //    const {} = props;
  return (
    <>
      <p>Welcome to Marvel Comics !</p>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Comics Page</title>
      </Helmet>
    </>
  );
}

export default Comics;
