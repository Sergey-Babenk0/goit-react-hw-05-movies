import {
  MovieContainer,
  MovieInformation,
  MovieTitle,
  MovieDescription,
  MovieSpan,
  MovieImage,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { title, vote_average, overview, poster_path, genres, release_date } =
    movie;

  const scores = vote_average * 100;

  return (
    <MovieContainer>
      <MovieImage src={poster_path} alt={title} width="300" />
      <MovieInformation>
        <MovieTitle>
          {title} {release_date}
        </MovieTitle>
        {vote_average === '0' && (
          <MovieDescription>
            <MovieSpan>User Score:</MovieSpan> {scores.toString().slice(0, 2)}%
          </MovieDescription>
        )}
        {overview && (
          <MovieDescription>
            <MovieSpan>Overview:</MovieSpan> {overview}
          </MovieDescription>
        )}
        {genres && (
          <MovieDescription>
            <MovieSpan>Genres:</MovieSpan> {genres}
          </MovieDescription>
        )}
      </MovieInformation>
    </MovieContainer>
  );
};

export { MovieInfo };
