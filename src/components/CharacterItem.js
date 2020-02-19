import React from "react";
import { Link } from "react-router-dom";

function CharacterItem({ id, name, description, thumbnail }) {
  // construct path to image
  const imagePath =
    thumbnail.path + "/" + "portrait_medium" + "." + thumbnail.extension;

  return (
    <>
      <Link className="character-item-link" to="/characters/:id">
        <div className="character-item-container">
          <img
            className="character-item-image"
            alt={`${name} thumbnail`}
            src={imagePath}
          ></img>
          <hr className="character-item-hr"></hr>
          <div className="character-item-content">
            <p className="character-item-name">{name}</p>
            <p className="character-item-description">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CharacterItem;
