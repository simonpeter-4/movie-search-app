function MovieCard({ movie, onAddFavourite }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        width="200"
      />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <button
        onClick={() => onAddFavourite(movie)}
      >
        Save to Favourites
      </button>
    </div>
  );
}

export default MovieCard;