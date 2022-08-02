import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import ExpandingCards from "./pages/projects/01-ExpandingCards/ExpandingCards";
import ProgressSteps from "./pages/projects/02-ProgressSteps/ProgressSteps";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/expanding" element={<ExpandingCards />} />
        <Route path="projects/progress" element={<ProgressSteps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
