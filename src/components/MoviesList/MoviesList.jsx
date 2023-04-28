import { MovieItem } from '../../components/MovieItem/MovieItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      <MovieItem movies={movies} />
    </List>
  );
};

export { MoviesList };
