import { ItemMovie } from 'components/MovieItem/MovieItem';
import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      <ItemMovie movies={movies} />
    </List>
  );
};

export { MoviesList };
