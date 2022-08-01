import { Link } from "react-router-dom";
import "./Project.css";

function Projects() {
  return (
    <main>
      <section>
        <h1>Projects</h1>
        <ol>
          <li>
            <Link to="expanding">Go to expanding cards</Link>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default Projects;
