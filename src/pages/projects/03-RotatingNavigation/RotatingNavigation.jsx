import { useRef } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./RotatingNavigation.css";

function RotatingNavigation() {
  document.title = "Rotating Navigation";
  const showNav = useRef(null);

  const addShowNav = () => {
    showNav.current.classList.add("show-nav");
  };

  const removeShowNav = () => {
    showNav.current.classList.remove("show-nav");
  };

  return (
    <main className="rotating-navigation">
      <div className="rotating-container" ref={showNav}>
        <div className="circle-container">
          <div className="circle-menu">
            <button type="button" id="close" onClick={removeShowNav}>
              <i className="fas fa-times" />
            </button>
            <button type="button" id="open" onClick={addShowNav}>
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
        <div className="rotating-content">
          <Backbutton />
          <h1>Content Title</h1>
          <small>sub title</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consectetur laborum, ipsa nobis eum unde repellat debitis natus quam
            iste iure, porro cupiditate nulla delectus. Totam recusandae
            explicabo expedita nihil.
          </p>
          <h2>The dog</h2>
          <img src="https://picsum.photos/id/1025/600" alt="the dog" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            illo. Mollitia eius ad quam ducimus asperiores sapiente tempore
            natus temporibus aut magnam aperiam recusandae minima voluptate
            iure, dolor incidunt. Error!
          </p>
        </div>
      </div>
      <nav className="rotating-nav">
        <ul>
          <li>
            <i className="fas fa-home" />
            Home
          </li>
          <li>
            <i className="fas fa-user-alt" />
            About
          </li>
          <li>
            <i className="fas fa-envelope" />
            Contact
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default RotatingNavigation;
