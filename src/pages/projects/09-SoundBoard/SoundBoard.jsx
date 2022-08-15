import { useEffect } from "react";
import applause from "../../../assets/sounds/applause.mp3";
import boo from "../../../assets/sounds/boo.mp3";
import gasp from "../../../assets/sounds/gasp.mp3";
import tada from "../../../assets/sounds/tada.mp3";
import victory from "../../../assets/sounds/victory.mp3";
import wrong from "../../../assets/sounds/wrong.mp3";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./SoundBoard.css";

function SoundBoard() {
  document.title = "Sound Board";
  useEffect(() => {
    const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

    function stopSongs() {
      sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
      });
    }

    sounds.forEach((sound) => {
      const btn = document.createElement("button");
      btn.classList.add("sound-btn");
      btn.innerText = sound;

      btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
      });
      document.getElementById("buttons").appendChild(btn);
    });
  });

  return (
    <main className="sound-board">
      <Backbutton />
      <audio id="applause" src={applause} type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="boo" src={boo} type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="gasp" src={gasp} type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="tada" src={tada} type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="victory" src={victory} type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="wrong" src={wrong} type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <div id="buttons" />
    </main>
  );
}

export default SoundBoard;
