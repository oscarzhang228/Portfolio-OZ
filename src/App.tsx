import "./styles/main.scss";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import ProjectsArchive from "./pages/ProjectsArchive";
import { ScrollWrapper } from "./components/ScrollWrapper";
/**
 * Main application component
 * @returns Main application component
 */
function App() {
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  return (
    <Router>
      <div className="page off-white flex flex-col justify-between">
        <Navigation
          homeRef={homeRef}
          projectsRef={projectsRef}
          experienceRef={experienceRef}
        />
        <ScrollWrapper>
          <Routes>
            <Route
              index
              element={
                <Landing
                  homeRef={homeRef}
                  projectsRef={projectsRef}
                  experienceRef={experienceRef}
                />
              }
            />
            <Route path="/projects" element={<ProjectsArchive />} />
          </Routes>
        </ScrollWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
