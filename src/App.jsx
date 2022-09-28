import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import {
  AnimatedNavigation,
  BackgroundSlider,
  BlurryLoading,
  DadJokes,
  DrinkWater,
  EventKey,
  ExpandingCards,
  FAQCollapse,
  FormWave,
  HiddenSearch,
  IncrementingCounter,
  MovieApp,
  ProgressSteps,
  RandomChoice,
  RotatingNavigation,
  ScrollAnimation,
  SoundBoard,
  SplitLanding,
} from "./pages/projects";
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
        <Route path="projects/scroll" element={<ScrollAnimation />} />
        <Route path="projects/split" element={<SplitLanding />} />
        <Route path="projects/formwave" element={<FormWave />} />
        <Route path="projects/soundboard" element={<SoundBoard />} />
        <Route path="projects/dadjokes" element={<DadJokes />} />
        <Route path="projects/eventkey" element={<EventKey />} />
        <Route path="projects/faq" element={<FAQCollapse />} />
        <Route path="projects/random" element={<RandomChoice />} />
        <Route path="projects/animated" element={<AnimatedNavigation />} />
        <Route path="projects/incrementing" element={<IncrementingCounter />} />
        <Route path="projects/drinkwater" element={<DrinkWater />} />
        <Route path="projects/movieapp" element={<MovieApp />} />
        <Route path="projects/bgslider" element={<BackgroundSlider />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
