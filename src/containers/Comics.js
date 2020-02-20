import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

// import component
import ComicItem from "../components/ComicItem";
import Pagination from "../components/Pagination";

function Comics(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [searchOn, setSearchOn] = useState(false);

  // Loading the comics item
  const fetchData = async (url, offset, limit) => {
    try {
      const response = await axios({
        url,
        method: "get",
        params: { offset, limit }
      });
      //const response = await axios.post(url, { offset, limit });
      // console.log("response comics", response.data);
      setComics(response.data);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred", err);
    }
  };

  let url = `https://marvel-api-hd.herokuapp.com/comics`;

  if (searchOn) {
    url = `https://marvel-api-hd.herokuapp.com/comics/search/${keyword}`;
  }
  //"http://localhost:4000/comics/"; //`https://marvel-api-hd.herokuapp.com/comics/`;
  const limit = 50;
  const total = comics.total;

  useEffect(() => {
    fetchData(url, offset, limit);
  }, [offset, searchOn]);

  return (
    <>
      <div className="comics-bg">
        {isLoading ? (
          "Please wait for loading ... "
        ) : (
          <div className="comics-container">
            <div className="comics-text-container">
              <h1>Marvel comics List</h1>
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
              <p className="comics-count">{total} results</p>
            </div>

            <div className="comics-list-wrap">
              {comics.results.map((comics, index) => (
                <ComicItem key={comics.id} {...comics}></ComicItem>
              ))}
            </div>
            <div className="comics-pagination-container">
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
        <title>Marvel Comics Page</title>
      </Helmet>
    </>
  );
}

export default Comics;
