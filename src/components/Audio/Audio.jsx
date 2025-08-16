import React from "react";
import "./Audio.css";
import song from "../../assets/audio/lagu.mp3";

const Audio = ({ playSong, togglePlay, audioRef }) => {
  // console.log(song);
  return (
    <div id="audio-container">
      <audio id="song" ref={audioRef} loop>
        <source src={song} type="audio/mp3" />
      </audio>

      <div className="audio-icon-wrapper">
        <i
          onClick={togglePlay}
          className={`bi ${playSong ? " bi-disc rotating" : "bi-pause-fill"} `}
        ></i>
      </div>
    </div>
  );
};

export default Audio;
