import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { AosInit } from "./utils/aos-init";

function App() {
  return (
    <Router>
      <LandingPage />
      <AosInit />
    </Router>
  );
}

export default App;
