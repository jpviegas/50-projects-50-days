import { useRef } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./SplitLanding.css";

function SplitLanding() {
  document.title = "Split Landing Page";
  const leftSide = useRef(null);
  const rightSide = useRef(null);
  const container = useRef(null);
  const mouseHoverLeftEnter = () => {
    container.current.classList.add("hover-left");
  };
  const mouseHoverLeftLeave = () => {
    container.current.classList.remove("hover-left");
  };
  const mouseHoverRightEnter = () => {
    container.current.classList.add("hover-right");
  };
  const mouseHoverRightLeave = () => {
    container.current.classList.remove("hover-right");
  };

  return (
    <main className="split-landing">
      <div className="split-container" ref={container}>
        <Backbutton />
        <div
          className="split split-left"
          ref={leftSide}
          onMouseEnter={mouseHoverLeftEnter}
          onMouseLeave={mouseHoverLeftLeave}
        >
          <h1>Title 1</h1>
          <a
            href="https://picsum.photos/"
            target="_blank"
            className="split-btn"
            rel="noreferrer"
          >
            Explore
          </a>
        </div>
        <div
          className="split split-right"
          ref={rightSide}
          onMouseEnter={mouseHoverRightEnter}
          onMouseLeave={mouseHoverRightLeave}
        >
          <h1>Title 2</h1>
          <a
            href="https://picsum.photos/"
            target="_blank"
            className="split-btn"
            rel="noreferrer"
          >
            Explore
          </a>
        </div>
      </div>
    </main>
  );
}

export default SplitLanding;
