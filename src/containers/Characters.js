import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

// import component
import CharacterItem from "../components/CharacterItem";
import Pagination from "../components/Pagination";

function Characters(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);
  const [startPage, setStartPage] = useState(1);

  // Loading the characters item
  const fetchData = async (uri, offset, limit) => {
    try {
      const response = await axios.post(uri, { offset, limit });
      // console.log("response characters", response.data);
      setCharacters(response.data);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred");
    }
  };

  const uri = `https://marvel-api-hd.herokuapp.com/characters/`; //"http://localhost:4000/characters/";
  const limit = 30;
  const total = characters.total;

  useEffect(() => {
    fetchData(uri, offset, limit);
  }, [offset]);

  return (
    <>
      <div className="characters-bg">
        {isLoading ? (
          "Please wait for loading ... "
        ) : (
          <div className="characters-container">
            <div className="characters-text-container">
              <h1>Marvel Characters List</h1>
              <input
                className="characters-search"
                type="text"
                placeholder="Search"
              ></input>
              <p className="characters-count">{total} results</p>
            </div>

            <div className="characters-list-wrap">
              {characters.results.map((character, index) => (
                <CharacterItem
                  key={character.id}
                  {...character}
                ></CharacterItem>
              ))}
            </div>
            <div className="characters-pagination-container">
              <Pagination
                offset={offset}
                setOffset={setOffset}
                total={total}
                limit={limit}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                startPage={startPage}
                setStartPage={setStartPage}
              ></Pagination>
            </div>
          </div>
        )}
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Characters Page</title>
      </Helmet>
    </>
  );
}

export default Characters;
