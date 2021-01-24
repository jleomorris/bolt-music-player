import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  isLibraryActive,
  setIsLibraryActive,
  isDarkModeActive,
  setIsDarkModeActive,
}) => {
  return (
    <nav>
      <div
        className={`nav-icon ${isDarkModeActive ? "nav-icon-dark" : ""} ${
          isLibraryActive ? "active-nav-icon" : ""
        }`}
      >
        <h1
        // className={`${isDarkModeActive ? "dark-icon-font" : ""}`}
        >
          Bolt
        </h1>
        <FontAwesomeIcon icon={faBolt} />
      </div>
      <div className="nav-buttons">
        <button
          className={`${isDarkModeActive ? "dark-button" : "light-button"}`}
          onClick={() => setIsLibraryActive(!isLibraryActive)}
        >
          Library
          {/* <FontAwesomeIcon icon={faMusic} /> */}
          <FontAwesomeIcon icon={isLibraryActive ? faEye : faEyeSlash} />
        </button>
        <button
          className={`${isDarkModeActive ? "dark-button" : "light-button"}`}
          onClick={() => setIsDarkModeActive(!isDarkModeActive)}
        >
          Dark mode
          <FontAwesomeIcon icon={isDarkModeActive ? faMoon : faSun} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
