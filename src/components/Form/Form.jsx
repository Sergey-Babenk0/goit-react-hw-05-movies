import { useForm } from 'react-hook-form';
import { SearchContainer, SearchInput, SearchButton } from './Form.styled';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <SearchContainer>
      <form
        onSubmit={handleSubmit(({ query }) => {
          onSubmit(query);
        })}
      >
        <SearchInput {...register('query')}></SearchInput>
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </SearchContainer>
  );
};

export { Form };
