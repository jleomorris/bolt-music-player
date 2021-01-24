import React from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const LibrarySong = ({
  song,
  songs,
  currentSong,
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
    if (id === currentSong.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else if (id === currentSong.id && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
    // else if (id !== currentSong.id && !isPlaying) {
    //   audioRef.current.play();
    //   setIsPlaying(true);
    // }
  };

  return (
    <div
      className={`library-song ${song.active ? "grayscale-off" : ""}`}
      onClick={songSelectHandler}
    >
      <div className="song-cover-container">
        <img alt={song.name} src={song.cover}></img>
        {id === currentSong.id && isPlaying && (
          <FontAwesomeIcon icon={faPause} />
        )}
        {id === currentSong.id && !isPlaying && (
          <FontAwesomeIcon icon={faPlayCircle} />
        )}
      </div>
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
