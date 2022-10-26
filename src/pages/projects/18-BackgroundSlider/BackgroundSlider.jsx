import { useEffect } from "react";
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./BackgroundSlider.css";

function BackgroundSlider() {
  document.title = "Background Slider";
  useEffect(() => {
    const bgMain = document.querySelector(".background-slider");
    const slides = document.querySelectorAll(".slide");
    const leftBtn = document.getElementById("left");
    const rightBtn = document.getElementById("right");

    let activeSlide = 0;

    function setBgToBody() {
      bgMain.style.backgroundImage = slides[activeSlide].style.backgroundImage;
    }

    function setActiveSlide() {
      slides.forEach((slide) => slide.classList.remove("active"));

      slides[activeSlide].classList.add("active");
    }

    rightBtn.addEventListener("click", () => {
      activeSlide++;

      if (activeSlide > slides.length - 1) {
        activeSlide = 0;
      }

      setBgToBody();
      setActiveSlide();
    });

    leftBtn.addEventListener("click", () => {
      activeSlide--;

      if (activeSlide < 0) {
        activeSlide = slides.length - 1;
      }

      setBgToBody();
      setActiveSlide();
    });
  }, []);

  return (
    <main className="background-slider">
      <Backbutton />
      <div className="slider-container">
        <div
          className="slide active"
          style={{ backgroundImage: "url('https://picsum.photos/700')" }}
        />
        <div
          className="slide"
          style={{ backgroundImage: "url('https://picsum.photos/800')" }}
        />
        <div
          className="slide"
          style={{ backgroundImage: "url('https://picsum.photos/900')" }}
        />
        <button type="button" className="arrow left-arrow" id="left">
          <i className="fas fa-arrow-left" />
        </button>
        <button type="button" className="arrow right-arrow" id="right">
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </main>
  );
}

export default BackgroundSlider;
