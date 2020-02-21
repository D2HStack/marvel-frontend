import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

import ComicItem from "../components/ComicItem";
import CharacterItem from "../components/CharacterItem";

function CharacterCard(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState();
  const [offset, setOffset] = useState(0);
  const [startPage, setStartPage] = useState(1);

  let { id } = useParams();

  // Loading the characters item
  const fetchData = async (url, offset, limit) => {
    try {
      const responseCharacter = await axios({
        url,
        method: "get"
      });
      const responseComics = await axios({
        url: url + "/comics",
        method: "get",
        offset,
        limit
      });

      setCharacter(responseCharacter.data.results);
      setComics(responseComics.data.results);
      setIsLoading(false);
    } catch (err) {
      alert("An error occurred", err);
    }
  };

  const url = `https://marvel-api-hd.herokuapp.com/characters/${id}`;

  const limit = 30;

  useEffect(() => {
    fetchData(url, offset, limit);
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          "Please wait for loading ... "
        ) : (
          <div className="character-card-bg">
            <div className="character-card-container">
              <div className="character-card-character-container">
                {character.map((character, index) => (
                  <CharacterItem
                    key={character.id}
                    {...character}
                  ></CharacterItem>
                ))}
              </div>
              <div className="character-card-list-wrap">
                {comics.map((comic, index) => (
                  <ComicItem key={comic.id} {...comic}></ComicItem>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marvel Character with {id} Page</title>
      </Helmet>
    </>
  );
}
//
export default CharacterCard;
