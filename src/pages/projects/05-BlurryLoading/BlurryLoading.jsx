import { useRef } from "react";
import "./BlurryLoading.css";

function BlurryLoading() {
  document.title = "Blurry Loading";
  const blurryBg = useRef(null);
  const loadingText = useRef(null);
  let load = 0;
  // eslint-disable-next-line no-use-before-define
  const intt = setInterval(blurring, 30);
  const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
  function blurring() {
    load += 1;
    if (load > 99) {
      clearInterval(intt);
    }
    loadingText.current.innerText = `${load}%`;
    loadingText.current.style.opacity = scale(load, 0, 100, 1, 0);
    blurryBg.current.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }

  return (
    <main className="blurry-loading">
      <section className="blurry-bg" ref={blurryBg} />
      <div className="blurry-loading-text" ref={loadingText}>
        0%
      </div>
    </main>
  );
}

export default BlurryLoading;

// scale function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
