import { useRef } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/projetcs">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
