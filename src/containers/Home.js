import React from "react";
import { Helmet } from "react-helmet";

function Home(props) {
  //    const {} = props;
  return (
    <>
      <p>Welcome to Marvel !</p>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Homepage</title>
      </Helmet>
    </>
  );
}

export default Home;
