import { useEffect } from "react";
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
      <audio
        id="applause"
        src="../src/assets/sounds/applause.mp3"
        type="audio/mpeg"
      >
        <track kind="captions" />
      </audio>
      <audio id="boo" src="../src/assets/sounds/boo.mp3" type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="gasp" src="../src/assets/sounds/gasp.mp3" type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio id="tada" src="../src/assets/sounds/tada.mp3" type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <audio
        id="victory"
        src="../src/assets/sounds/victory.mp3"
        type="audio/mpeg"
      >
        <track kind="captions" />
      </audio>
      <audio id="wrong" src="../src/assets/sounds/wrong.mp3" type="audio/mpeg">
        <track kind="captions" />
      </audio>
      <div id="buttons" />
    </main>
  );
}

export default SoundBoard;
