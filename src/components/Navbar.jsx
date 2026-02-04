import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🎬 Movie Recommender</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/recommend">Recommend</NavLink>
        <NavLink to="/about">About</NavLink>

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}


