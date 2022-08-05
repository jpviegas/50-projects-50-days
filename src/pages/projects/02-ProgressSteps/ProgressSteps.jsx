import { useEffect } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./ProgressSteps.css";

function ProgressSteps() {
  document.title = "Progress Steps";
  useEffect(() => {
    const progress = document.getElementById("progress");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");
    let currentActive = 1;

    function update() {
      circles.forEach((circle, idx) => {
        if (idx < currentActive) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
      const actives = document.querySelectorAll(".active");
      progress.style.width = `${
        ((actives.length - 1) / (circles.length - 1)) * 100
      }%`;
    }

    next.addEventListener("click", () => {
      currentActive += 1;
      if (currentActive > circles.length) {
        currentActive = circles.length;
      }

      update();
    });

    // if (currentActive === 1) {
    //   prev.disabled = true;
    // } else if (currentActive === circles.length) {
    //   next.disabled = true;
    // } else {
    //   prev.disabled = false;
    //   next.disabled = false;
    // }

    prev.addEventListener("click", () => {
      currentActive -= 1;
      if (currentActive < 1) {
        currentActive = 1;
      }
      update();
    });
  }, []);

  return (
    <main className="progress-container">
      <div className="progress-title">
        <Backbutton />
        <h1>Go to next/previous step</h1>
      </div>
      <div className="progress-steps">
        <div className="progress" id="progress" />
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>
      <button type="button" className="btn" id="prev">
        Prev
      </button>
      <button type="button" className="btn" id="next">
        Next
      </button>
    </main>
  );
}

export default ProgressSteps;
