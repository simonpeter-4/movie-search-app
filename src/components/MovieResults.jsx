import MovieCard from "./moviecard";

function MovieResults({ movies, onAddFavourite }) {
  return (
    <div className="results-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onAddFavourite={onAddFavourite}
        />
      ))}
    </div>
  );
}

export default MovieResults;