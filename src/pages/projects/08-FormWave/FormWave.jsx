/* eslint-disable jsx-a11y/label-has-associated-control */
import Backbutton from "../../../components/layout/backbutton/Backbutton";
import "./FormWave.css";

function FormWave() {
  document.title = "Form Wave";
  // const labels = document.querySelectorAll(".form-control label");
  // labels.forEach(label => {
  //   label.innerHTML = label.innerHTML
  //     .split("")
  //     .map(
  //       (letter, idx) =>
  //         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
  //     )
  //     .join("");
  // });

  return (
    <main className="form-wave">
      <Backbutton />
      <div className="form-container">
        <h1>Please Login</h1>
        <form action="">
          <div className="form-control">
            <input type="text" required />
            <label>
              {/* Email */}
              <span style={{ transitionDelay: "50ms" }}>E</span>
              <span style={{ transitionDelay: "100ms" }}>m</span>
              <span style={{ transitionDelay: "150ms" }}>a</span>
              <span style={{ transitionDelay: "200ms" }}>i</span>
              <span style={{ transitionDelay: "250ms" }}>l</span>
            </label>
          </div>
          <div className="form-control">
            <input type="password" required />
            <label>
              {/* Password */}
              <span style={{ transitionDelay: "50ms" }}>P</span>
              <span style={{ transitionDelay: "100ms" }}>a</span>
              <span style={{ transitionDelay: "150ms" }}>s</span>
              <span style={{ transitionDelay: "200ms" }}>s</span>
              <span style={{ transitionDelay: "250ms" }}>w</span>
              <span style={{ transitionDelay: "300ms" }}>o</span>
              <span style={{ transitionDelay: "350ms" }}>r</span>
              <span style={{ transitionDelay: "400ms" }}>d</span>
            </label>
          </div>
          <button className="form-btn" type="button">
            Login
          </button>
          <p className="text">
            Don&apos;t have an account?
            <a href="register"> Register</a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default FormWave;
