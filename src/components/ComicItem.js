import React from "react";
import { Link } from "react-router-dom";

function ComicItem({ id, title, description, thumbnail }) {
  // construct path to image
  const imagePath =
    thumbnail.path + "/" + "portrait_medium" + "." + thumbnail.extension;

  const comicCardPath = "/comics/" + id;

  return (
    <>
      <Link className="comic-item-link" to={comicCardPath}>
        <div className="comic-item-container">
          <img
            className="comic-item-image"
            alt={`${title} thumbnail`}
            src={imagePath}
          ></img>
          <hr className="comic-item-hr"></hr>
          <div className="comic-item-content">
            <p className="comic-item-title">{title}</p>
            <p className="comic-item-description">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ComicItem;
