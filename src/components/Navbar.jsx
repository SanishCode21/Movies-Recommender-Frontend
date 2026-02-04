import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🎬 Movie Recommender App</h2>

      {/* Hamburger (mobile) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/recommend" onClick={() => setMenuOpen(false)}>Recommend</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

