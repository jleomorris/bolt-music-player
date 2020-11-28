import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
  isDarkModeActive,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);

    // Change selected song to active
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
    if (!isPlaying) {
      setIsPlaying(!isPlaying);
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>
          {song.name}
        </h3>
        <h4 className={`${isDarkModeActive ? "dark-icon-font" : ""}`}>
          {song.artist}
        </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
