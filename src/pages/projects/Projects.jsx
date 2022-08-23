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
          <li>
            <Link to="jokes">Go to Dad Jokes</Link>
          </li>
          <li>
            <Link to="event">Go to Event KeyCodes</Link>
          </li>
          <li>
            <Link to="faq">Go to FAQ Collapse</Link>
          </li>
          <li>
            <Link to="random">Go to Random Choices</Link>
          </li>
          <li>
            <Link to="animated">Go to Animated Navigation</Link>
          </li>
          <li>
            <Link to="incrementing">Go to Incrementing Counter</Link>
          </li>
          <li>
            <Link to="drink">Go to Drink Water</Link>
          </li>
          <li>
            <Link to="movie">Go to Movie App</Link>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default Projects;
