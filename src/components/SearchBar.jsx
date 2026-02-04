import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ movieList }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Navigate to recommend page
    navigate(`/recommend?movie=${encodeURIComponent(query)}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      {/* Dropdown */}
      <select
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value="">Select a movie</option>
        {movieList.map((movie, index) => (
          <option key={index} value={movie}>
            {movie}
          </option>
        ))}
      </select>

      <span className="or-text">OR</span>

      {/* Manual input */}
      <input
        type="text"
        placeholder="Type a movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">Recommend</button>
    </form>
  );
}

export default SearchBar;


