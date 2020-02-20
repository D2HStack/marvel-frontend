import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

function CharacterCard(props) {
  //    const {} = props;
  let { id } = useParams();
  console.log(id);
  return (
    <>
      <p>Welcome to Character with id {id} !</p>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Character with id {id} Page</title>
      </Helmet>
    </>
  );
}
//
export default CharacterCard;
