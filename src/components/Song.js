import React from "react";

const Song = ({ currentSong, isPlaying, isDarkModeActive }) => {
  return (
    <div className="song-container">
      <img
        alt={currentSong.name}
        className={`${isPlaying ? "rotate" : ""}`}
        src={currentSong.cover}
      ></img>
      <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>
        {currentSong.name}
      </h2>
      <h3 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>
        {currentSong.artist}
      </h3>
    </div>
  );
};

export default Song;
