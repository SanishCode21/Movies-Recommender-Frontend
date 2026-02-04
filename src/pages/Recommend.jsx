import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieGrid from "../components/movieGrid";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(API_BASE_URL)

export default function Recommend() {
    const [params] = useSearchParams();
    const movieName = params.get("movie");

    const [movies, setMovies] = useState([]);
    const [inputMovie, setInputMovie] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch(`${API_BASE_URL}/recommend`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ movie_name: movieName })
        })
            .then(res => res.json())
            .then(data => {
                setInputMovie(data.input_movie);
                setMovies(data.results);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [movieName]);

    /* NO MOVIE SELECTED */
    if (!movieName) {
        return (
            <div className="page">
                <h2>🎬 Movie Recommendations</h2>
                <p>
                    Select a movie from the home page or search to get personalized
                    recommendations.
                </p>
            </div>
        );
    }

    if (loading)
        return (
            <p className="loading">
                🍿Finding great movies for you please wait for a moment...
            </p>
        );

    return (
        <div className="page">
            <h2 className="result-title">
                Because you watched <span>{inputMovie}</span>
            </h2>

            <MovieGrid movies={movies} />
        </div>
    );
}
