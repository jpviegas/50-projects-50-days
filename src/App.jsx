import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import ExpandingCards from "./pages/projects/01-ExpandingCards/ExpandingCards";
import ProgressSteps from "./pages/projects/02-ProgressSteps/ProgressSteps";
import RotatingNavigation from "./pages/projects/03-RotatingNavigation/RotatingNavigation";
import HiddenSearch from "./pages/projects/04-HiddenSearch/HiddenSearch";
import BlurryLoading from "./pages/projects/05-BlurryLoading/BlurryLoading";
import Projects from "./pages/projects/Projects";

function App() {
  document.title = "50 Projects in 50 Days";
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/expanding" element={<ExpandingCards />} />
        <Route path="projects/progress" element={<ProgressSteps />} />
        <Route path="projects/rotating" element={<RotatingNavigation />} />
        <Route path="projects/hidden" element={<HiddenSearch />} />
        <Route path="projects/blurry" element={<BlurryLoading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
