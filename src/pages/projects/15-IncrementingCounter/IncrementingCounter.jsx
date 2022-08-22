/* eslint-disable no-param-reassign */
import { useEffect } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./IncrementingCounter.css";

function IncrementingCounter() {
  document.title = "Incrementing Counter";
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = Math.random() * 200;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(() => {
            updateCounter();
          }, 100);
        }
      };
      updateCounter();
    });
  });

  return (
    <main className="increment-counter">
      <Backbutton />
      <div className="counter-container">
        <i className="fab fa-twitter fa-3x" />
        <div className="counter" data-target="12000" />
        <span>Twitter Followes</span>
      </div>
      <div className="counter-container">
        <i className="fab fa-youtube fa-3x" />
        <div className="counter" data-target="15000" />
        <span>YouTube Subscribers</span>
      </div>
      <div className="counter-container">
        <i className="fab fa-facebook fa-3x" />
        <div className="counter" data-target="7000" />
        <span>Facebook Fans</span>
      </div>
    </main>
  );
}

export default IncrementingCounter;
