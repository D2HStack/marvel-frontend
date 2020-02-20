import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function CharacterItem({ id, name, description, thumbnail }) {
  const [isFavorite, setIsFavorite] = useState(false);
  // if character is favorite set to true
  const checkFavorite = id => {
    let favoriteTab = Cookies.get("favorites");
    if (favoriteTab && favoriteTab.indexOf(id) !== -1) {
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    checkFavorite(id);
  }, []);

  // construct path to image
  const imagePath =
    thumbnail.path + "/" + "portrait_medium" + "." + thumbnail.extension;

  const characterCardPath = "/characters/" + id;

  return (
    <>
      <div>
        <button
          className={isFavorite && "favorite"}
          onClick={() => {
            if (isFavorite) {
              // import the string from cookie favorite
              const favoritesStr = Cookies.get("favorites");
              // if only ten characters then delete teh cookie
              if (favoritesStr.length < id.toString().length + 2) {
                Cookies.remove("favorites");
                setIsFavorite(false);
              } else {
                // look at index of string id
                const index = favoritesStr.indexOf("a" + id);
                // remove id from the string there are 10 characters
                // first transform into array
                const newArray = favoritesStr.split("");
                // splice the array
                newArray.splice(index, id.toString().length + 1);
                // reconstruct the string and put it in the cookie
                Cookies.set("favorites", newArray.join(""));
                setIsFavorite(false);
              }
            } else if (!Cookies.get("favorites")) {
              Cookies.set("favorites", "a" + id, { expires: 1 });
              setIsFavorite(true);
            } else {
              Cookies.set("favorites", Cookies.get("favorites") + "a" + id);
              setIsFavorite(true);
            }
          }}
        >
          <i class="far fa-thumbs-up "></i>
        </button>
        <Link className="character-item-link" to={characterCardPath}>
          <div className="character-item-container ">
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
      </div>
    </>
  );
}

export default CharacterItem;
