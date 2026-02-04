import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import About from "./pages/About";

function App() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <BrowserRouter>
      <div className="app">
        <Navbar selectedMovie={selectedMovie} theme={theme} setTheme={setTheme} />

        <Routes>
          <Route
            path="/"
            element={<Home setSelectedMovie={setSelectedMovie} />}
          />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />

    </BrowserRouter >
  );
}

export default App;


