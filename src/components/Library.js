import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  isLibraryActive,
  isDarkModeActive,
}) => {
  return (
    <div
      className={`library ${isLibraryActive ? "active-library" : ""} ${
        isDarkModeActive ? "dark" : ""
      }`}
    >
      <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
