import { useRef } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./EventKey.css";

function EventKey() {
  document.title = "Event KeyCode";
  const insertRef = useRef("");

  const handleKeyPress = (e) => {
    insertRef.current.innerHTML = `
    <div class="keycode">
    ${e.key === " " ? "Space" : e.key}
    <small>event.key</small>
    </div>
    <div class="keycode">
    ${e.keyCode}
    <small>event.keyCode</small>
    </div>
    <div class="keycode">
    ${e.code}
    <small>event.code</small>
    </div>
    `;
  };

  window.addEventListener("keydown", (e) => handleKeyPress(e));

  return (
    <main className="event-key">
      <Backbutton />
      <div id="insert" ref={insertRef} />
      <input
        type="text"
        name="key-input"
        id="key-input"
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <div className="keycode">Press any key to get the keyCode</div>
    </main>
  );
}

export default EventKey;
