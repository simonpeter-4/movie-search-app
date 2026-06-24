function FavouritesList({
  favourites,
  onRemoveFavourite,
}) {
  return (
    <div>
      <h2>Favourite Movies</h2>

      {favourites.length === 0 ? (
        <p>No favourites yet</p>
      ) : (
        favourites.map((movie) => (
          <div
            key={movie.imdbID}
            className="favourite-card"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              width="100"
            />

            <div>
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>

              <button
                onClick={() =>
                  onRemoveFavourite(movie.imdbID)
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default FavouritesList;