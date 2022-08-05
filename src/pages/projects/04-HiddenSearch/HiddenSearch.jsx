import { useRef } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./HiddenSearch.css";

function HiddenSearch() {
  document.title = "Hidden Search";
  const ref = useRef(null);

  const toggleActive = () => {
    ref.current.classList.toggle("active");
    ref.current.firstChild.focus();
  };

  return (
    <main className="hidden-search">
      <Backbutton />
      <h1>Click on search button to expand</h1>
      <div className="search" ref={ref}>
        <input type="text" className="input" placeholder="Search..." />
        <button type="button" className="hidden-btn" onClick={toggleActive}>
          <i className="fas fa-search" />
        </button>
      </div>
    </main>
  );
}

export default HiddenSearch;
