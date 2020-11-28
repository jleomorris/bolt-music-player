import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
  isLibraryActive,
  isDarkModeActive,
}) => {
  // Handlers
  const sortByArtistHandler = () => {
    const songCopy = songs.map((song) => song);
    const sortedyArtist = songCopy.sort((a, b) =>
      a.artist > b.artist ? 1 : -1
    );
    setSongs(sortedyArtist);
  };

  const sortByTitleHandler = () => {
    const songCopy = songs.map((song) => song);
    const sortedByTitle = songCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
    setSongs(sortedByTitle);
  };

  return (
    <div
      className={`library ${isLibraryActive ? "active-library" : ""} ${
        isDarkModeActive ? "dark" : ""
      }`}
    >
      <h2 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>Library</h2>
      <div className="sort-by-container">
        <h3 className="sort-by">Sort by</h3>
        <hr />
      </div>
      <div className="sort-by-button-container">
        <button onClick={sortByArtistHandler}>Artist</button>
        <button onClick={sortByTitleHandler}>Title</button>
      </div>
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
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
            isDarkModeActive={isDarkModeActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
