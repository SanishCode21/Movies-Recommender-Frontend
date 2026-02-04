function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        src={movie.poster}
        alt={movie.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x450?text=No+Poster";
        }}
      />

      <div className="card-body">
        <h3>{movie.title}</h3>
        <p>Similarity: <b>{movie.similarity_score.toFixed(2)}</b></p>
      </div>
    </div>
  );
}

export default MovieCard;

