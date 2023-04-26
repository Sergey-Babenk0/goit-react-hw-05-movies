import styled from '@emotion/styled';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 80px;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #f7b75d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f87b07;
  }
`;

export { SearchContainer, SearchInput, SearchButton };
