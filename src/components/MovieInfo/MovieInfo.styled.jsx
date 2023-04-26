import styled from '@emotion/styled';

const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const MovieInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const MovieTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MovieDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const MovieSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const MovieImage = styled.img`
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

export {
  MovieContainer,
  MovieInformation,
  MovieTitle,
  MovieDescription,
  MovieSpan,
  MovieImage,
};
