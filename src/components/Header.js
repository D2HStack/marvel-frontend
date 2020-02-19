import React from "react";
import { Link } from "react-router-dom";
import marvelLogo from "../assets/img/marvel_logo.png";

function Header(props) {
  //    const {} = props;
  return (
    <>
      <div className="header-container">
        <img className="header-logo" alt="Marvel Logo" src={marvelLogo}></img>
        <div className="header-nav-container">
          <Link className="header-nav-link" to="/">
            HOME
          </Link>
          <Link className="header-nav-link" to="/characters">
            CHARACTERS
          </Link>
          <Link className="header-nav-link" to="/comics">
            COMICS
          </Link>
          <Link className="header-nav-link" to="/favorites">
            FAVORITES
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
