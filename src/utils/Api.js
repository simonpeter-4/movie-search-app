import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
  );

  return response.data.Search || [];
};