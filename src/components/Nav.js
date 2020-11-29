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
          className={`${isDarkModeActive ? "dark-hover" : "light-hover"}`}
          onClick={() => setIsLibraryActive(!isLibraryActive)}
        >
          {isLibraryActive ? "Hide library" : "Expand library"}
          {/* <FontAwesomeIcon icon={faMusic} /> */}
          <FontAwesomeIcon icon={isLibraryActive ? faEyeSlash : faEye} />
        </button>
        <button
          className={`${isDarkModeActive ? "dark-hover" : "light-hover"}`}
          onClick={() => setIsDarkModeActive(!isDarkModeActive)}
        >
          {isDarkModeActive ? "Dark mode off" : "Dark mode on"}
          <FontAwesomeIcon icon={isDarkModeActive ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
