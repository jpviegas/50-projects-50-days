import { useEffect } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./DrinkWater.css";

function DrinkWater() {
  document.title = "Drink Water";
  useEffect(() => {
    const smallCups = document.querySelectorAll(".cup-small");
    const liters = document.getElementById("liters");
    const percentage = document.getElementById("percentage");
    const remained = document.getElementById("remained");

    function updateBigCup() {
      const fullCups = document.querySelectorAll(".cup-small.full").length;
      const totalCups = smallCups.length;
      if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
      } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
      }
      if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
      } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * fullCups) / 1000}`;
      }
    }

    function highlightCups(idx) {
      if (
        smallCups[idx].classList.contains("full") &&
        !smallCups[idx].nextElementSibling.classList.contains("full")
      ) {
        idx--;
      }
      smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
          cup.classList.add("full");
        } else {
          cup.classList.remove("full");
        }
      });

      updateBigCup();
    }

    smallCups.forEach((cup, idx) => {
      cup.addEventListener("click", () => highlightCups(idx));
    });
  });

  return (
    <main className="drink-water">
      <Backbutton />
      <h1>Drink Water</h1>
      <h2>Goal: 2 liters</h2>
      <div className="cup cup-big">
        <div className="remained" id="remained">
          <span id="liters" />
          <small>Remained</small>
        </div>
        <div className="percentage" id="percentage" />
      </div>
      <p className="text">
        Select how many glasses of water that ypu have drank
      </p>
      <div className="cups">
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
        <div className="cup cup-small">250ml</div>
      </div>
    </main>
  );
}

export default DrinkWater;
