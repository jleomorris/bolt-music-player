import React, { useState, useRef, useEffect } from "react";
// Styles
import "./styles/app.scss";
// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Song data
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [isLibraryActive, setIsLibraryActive] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  // Refs
  const audioRef = useRef(null);

  //UseEffect
  useEffect(() => {
    setIsLibraryActive(true);
  }, []);

  // Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      className={`App ${isLibraryActive ? "library-active" : ""} ${
        isDarkModeActive ? "dark" : ""
      }`}
    >
      <Nav
        isLibraryActive={isLibraryActive}
        setIsLibraryActive={setIsLibraryActive}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
      />
      <Song
        currentSong={currentSong}
        isPlaying={isPlaying}
        isDarkModeActive={isDarkModeActive}
      />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        isLibraryActive={isLibraryActive}
        isDarkModeActive={isDarkModeActive}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
