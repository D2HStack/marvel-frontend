import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

// import component
import CharacterItem from "../components/CharacterItem";

function Characters(props) {
  const offset = 0;
  const limit = 10;

  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchData = async (uri, offset, limit) => {
    try {
      const response = await axios.get(uri, { offset: 0, limit: 5 });
      console.log("response characters", response.data);
      setCharacters(response.data);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred");
    }
  };

  const uri = `https://marvel-api-hd.herokuapp.com/characters/all`;

  useEffect(() => {
    fetchData(uri, offset, limit);
  }, []);

  return (
    <>
      <div className="characters-container">
        <h1>Marvel Characters List</h1>
        <div>
          {isLoading ? (
            "Please wait for loading ... "
          ) : (
            <>
              <input type="text" placeholder="Search"></input>
              <p>{characters.count}</p>
              {characters.results.map((character, index) => (
                <CharacterItem
                  key={character.id}
                  {...character}
                ></CharacterItem>
              ))}

              <CharacterItem {...characters.results[0]}></CharacterItem>
            </>
          )}
        </div>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Characters Page</title>
      </Helmet>
    </>
  );
}

export default Characters;
