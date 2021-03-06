import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

// import component
import CharacterItem from "../components/CharacterItem";
import Pagination from "../components/Pagination";

function Home(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [offset, setOffset] = useState(0);
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [searchOn, setSearchOn] = useState(false);

  // random offset 30 seconds if no search
  console.log(searchOn);
  if (!searchOn) {
    setInterval(() => {
      setOffset(Math.floor(1000 * Math.random()));
    }, 30000);
  }
  // Loading the characters item
  const fetchData = async (url, offset, limit) => {
    try {
      const response = await axios({
        url,
        method: "get",
        params: { offset, limit }
      });
      setCharacters(response.data);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred", err);
    }
  };

  const limit = 7;
  const total = characters.total;
  let url = `https://marvel-api-hd.herokuapp.com/characters`;

  if (searchOn) {
    url = `https://marvel-api-hd.herokuapp.com/characters/search/${keyword}`;
  }

  useEffect(() => {
    fetchData(url, offset, limit);
  }, [offset, searchOn]);

  return (
    <>
      <div className="characters-bg">
        {isLoading ? (
          "Please wait for loading ... "
        ) : (
          <div className="characters-container">
            <div className="characters-text-container">
              <h1>Welcome to Marvel</h1>
              <form
                onSubmit={event => {
                  event.preventDefault();
                  setSearchOn(true);
                }}
              >
                <input
                  className="characters-search"
                  type="text"
                  placeholder="Search"
                  value={keyword}
                  onChange={event => {
                    setSearchOn(false);
                    setKeyword(event.target.value);
                  }}
                ></input>
                <button className="characters-search-button" type="submit">
                  Let's Go !{" "}
                </button>
              </form>
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

export default Home;
