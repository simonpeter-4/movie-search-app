import { useState } from "react";
import { searchMovies } from "./utils/Api";
import SearchBar from "./components/searchbar";
import MovieResults from "./components/MovieResults";
import './App.css';
import FavouritesList from "./components/FavouritesList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const [favourites, setFavourites] =
  useLocalStorage("favourites", []);
  const removeFavourite = (id) => {
  setFavourites(
    favourites.filter(
      (movie) => movie.imdbID !== id
    )
  );
};

  const handleSearch = async (query) => {
  setSearched(true);
  setLoading(true);
  setError("");

  try {
    const results = await searchMovies(query);

    setMovies(results);

    if (results.length === 0) {
      setError("No movies found.");
    }
  } catch (err) {
    setError("Failed to fetch movies.");
  }

  setLoading(false);
};
  const addFavourite = (movie) => {
  const exists = favourites.some(
    (fav) => fav.imdbID === movie.imdbID
  );

  if (!exists) {
    setFavourites([...favourites, movie]);
  }
  };

  return (
  <div>
    <h1>Movie Search App</h1>

    <SearchBar onSearch={handleSearch} />

    {loading && <p>Loading movies...</p>}
    {error && <p>{error}</p>}
    {searched &&
    !loading &&
    !error &&
    movies.length === 0 && (
    <p>No movies found.</p>
    )}
    <MovieResults
      movies={movies}
      onAddFavourite={addFavourite}
    />

    <FavouritesList
  favourites={favourites}
  onRemoveFavourite={removeFavourite}
/>
  </div>
);
}

export default App;