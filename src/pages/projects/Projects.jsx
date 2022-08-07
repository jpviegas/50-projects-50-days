import { Link } from "react-router-dom";
import "./Project.css";

function Projects() {
  document.title = "Projects";

  return (
    <main>
      <section>
        <h1>Projects</h1>
        <ol>
          <li>
            <Link to="expanding">Go to expanding cards</Link>
          </li>
          <li>
            <Link to="progress">Go to progress steps</Link>
          </li>
          <li>
            <Link to="rotating">Go to rotating navigation</Link>
          </li>
          <li>
            <Link to="hidden">Go to hidden search widget</Link>
          </li>
          <li>
            <Link to="blurry">Go to blurry loading</Link>
          </li>
          <li>
            <Link to="scroll">Go to scroll animation</Link>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default Projects;
