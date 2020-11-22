import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[songs.length - 1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
