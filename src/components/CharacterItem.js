import React from "react";

function CharacterItem({ id, name, description, thumbnail }) {
  //    const {} = props;
  // construct path to image
  console.log(thumbnail);
  const imagePath =
    thumbnail.path + "/" + "portrait_medium" + "." + thumbnail.extension;
  console.log(imagePath);
  return (
    <>
      <div>
        <img alt={`${name} thumbnail`} src={imagePath}></img>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </>
  );
}

export default CharacterItem;
