import "./styles/main.scss";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

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
      <Navigation
        homeRef={homeRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
      />
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
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
