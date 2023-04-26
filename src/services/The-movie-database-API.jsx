import axios from 'axios';

const KEY = 'fd28b85e264eab67a639ae3db03827da';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response;
}

async function fetchMovieById(id) {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
  return response;
}

async function fetchMovieBySearch(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&${query}`
  );
  return response;
}

async function fetchCreditsById(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  );
  return response;
}

async function fetchReviewsById(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`
  );

  return response;
}

export {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMovieBySearch,
  fetchCreditsById,
  fetchReviewsById,
};
