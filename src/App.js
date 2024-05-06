import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Partner from "./pages/Partner";
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </div>
       <Analytics />
    </Router>
  );
}

export default App;
