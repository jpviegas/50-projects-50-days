import { Link } from "react-router-dom";
import "./Project.css";

function Projects() {
  document.title = "Projects";

  return (
    <main className="projects-page">
      <section>
        <h1>Projects</h1>
        <ol>
          <li>
            <Link to="expanding">Go to Expanding Cards</Link>
          </li>
          <li>
            <Link to="progress">Go to Progress Steps</Link>
          </li>
          <li>
            <Link to="rotating">Go to Rotating Navigation</Link>
          </li>
          <li>
            <Link to="hidden">Go to Hidden Search Widget</Link>
          </li>
          <li>
            <Link to="blurry">Go to Blurry Loading</Link>
          </li>
          <li>
            <Link to="scroll">Go to Scroll Animation (wip)</Link>
          </li>
          <li>
            <Link to="split">Go to Split Landing Page</Link>
          </li>
          <li>
            <Link to="form">Go to Form Wave Animation</Link>
          </li>
          <li>
            <Link to="sound">Go to Sound Board</Link>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default Projects;
