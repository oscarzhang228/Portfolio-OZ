import "./styles/main.scss";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navigation from "./components/Navigation/Navigation";

/**
 * Main application component
 * @returns Main application component
 */
function App() {
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <Router>
      <Navigation homeRef={homeRef} projectsRef={projectsRef} />
      <Routes>
        <Route
          index
          element={<Landing homeRef={homeRef} projectsRef={projectsRef} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
