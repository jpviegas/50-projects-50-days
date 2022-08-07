import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./ScrollAnimation.css";

function ScrollAnimation() {
  document.title = "Scroll Animation";
  const boxes = document.querySelectorAll(".box");

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  checkBoxes();

  window.addEventListener("scroll", checkBoxes);

  return (
    <main className="scroll-animation">
      <Backbutton />
      <h1>Scroll to see the animation</h1>
      <div className="box show">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
    </main>
  );
}

export default ScrollAnimation;
