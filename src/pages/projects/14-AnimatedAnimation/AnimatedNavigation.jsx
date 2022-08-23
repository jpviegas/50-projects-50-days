import { useRef } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./AnimatedNavigation.css";

function AnimatedNavigation() {
  document.title = "Animated Navigation";
  const animatedToggleRef = useRef(null);
  const onClickHandler = () => {
    animatedToggleRef.current.classList.toggle("animated-active");
  };

  return (
    <>
      <Backbutton />
      <main className="animated-navigation">
        <nav className="animated-active" id="nav" ref={animatedToggleRef}>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Projects</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
          <button
            type="button"
            className="animated-icon"
            id="animated-toggle"
            onClick={onClickHandler}
          >
            <div className="line line1" />
            <div className="line line2" />
          </button>
        </nav>
      </main>
    </>
  );
}

export default AnimatedNavigation;
