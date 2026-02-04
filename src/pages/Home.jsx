import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Home() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/movies`)
            .then(res => res.json())
            .then(data => setMovieList(data));
    }, []);

    return (
        <div>
            <SearchBar movieList={movieList} />

            <div className="hero-wrapper">
                <div className="hero">
                    <h2>🍿 Ready for a Movie Adventure?</h2>
                    <p>
                        Discover movies you will love based on what you already enjoy.
                        Select a movie or type its name to begin your cinematic journey.
                    </p>
                    <p className="highlight">
                        Action • Adventure • Sci-Fi • Drama • Fantasy
                    </p>
                </div>
            </div>
        </div>
    );
}

