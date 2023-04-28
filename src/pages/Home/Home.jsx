import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/The-movie-database-API';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
