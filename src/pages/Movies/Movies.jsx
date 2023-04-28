import { useState, useEffect } from 'react';
import { fetchMovieBySearch } from '../../services/The-movie-database-API';
import { Form } from '../../components/Form/Form';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    fetchMovieBySearch(queryParams).then(({ data }) => {
      setMovies(data.results);
    });
  }, [queryParams]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setQueryParams(nextParams);
  };

  return (
    <>
      <Form onSubmit={updateQueryString} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
