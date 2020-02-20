import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";

// import component
import CharacterItem from "../components/CharacterItem";
import Pagination from "../components/Pagination";

function Favorites(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  // transform the cookie into array of ids
  const cookieStr = Cookies.get("favorites");
  const cookieArr = cookieStr.split("a");
  cookieArr.shift();
  const total = cookieArr.length;
  console.log("total", total);
  console.log("cookieArr", cookieArr);
  // const limit = 25;

  // Function loading a character with her id
  const fetchData = async id => {
    try {
      const url = `https://marvel-api-hd.herokuapp.com/characters/${id}`;
      const response = await axios({
        url,
        method: "get"
      });
      return response.data.results[0];
    } catch (err) {
      alert("An error occurred", err);
    }
  };

  useEffect(() => {
    axios
      .all(
        cookieArr.map(id => {
          return fetchData(id);
        })
      )
      .then(array => setCharacters(array));

    setIsLoading(false);
  }, []);

  return (
    <>
      <div></div>
      <div className="characters-bg">
        {isLoading ? (
          "Please wait for loading ... "
        ) : (
          <div className="characters-container">
            <div className="characters-text-container">
              <h1>Your Marvel Favorites Characters</h1>

              <p className="characters-count">{total} results</p>
            </div>
            <div className="characters-list-wrap">
              {characters.map((character, index) => (
                <CharacterItem
                  key={character.id}
                  {...character}
                ></CharacterItem>
              ))}
            </div>
          </div>
        )}
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Favorites Page</title>
      </Helmet>
    </>
  );
}

export default Favorites;
