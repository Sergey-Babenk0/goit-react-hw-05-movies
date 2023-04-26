import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from '../../services/The-movie-database-API';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { AddMovieInformation } from 'components/AddMovieInformation/AddMovieInformation';
import { Button, SpanForSVG } from './MovieDetails.styled';
import { defaultImg } from '../../image/defaultImage';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(id)
      .then(({ data }) => {
        const {
          title,
          vote_average,
          overview,
          poster_path,
          genres,
          release_date,
        } = data;
        const movieInfo = {
          title,
          release_date: release_date.slice(0, 4),
          vote_average,
          overview,
          poster_path: poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : `${defaultImg}`,
          genres: genres.map(({ name }) => name).join(', '),
        };

        setMovie(movieInfo);
      })
      .catch(error => console.error(error));
  }, [id]);

  const backLink = location.state?.from ?? 'movies';

  return (
    <>
      <Button type="click" onClick={() => navigate(backLink)}>
        <SpanForSVG>
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path d="M8.59 12L14.59 6L16 7.41L11.83 11H20v2H11.83L16 16.59L14.59 18L8.59 12Z" />
          </svg>
        </SpanForSVG>
      </Button>
      <MovieInfo movie={movie} />
      <AddMovieInformation />
    </>
  );
};

export default MovieDetails;
