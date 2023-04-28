import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #f7b75d;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 0 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f87b07;
  }
`;

const SpanForSVG = styled.span`
  display: flex;
  align-items: center;
`;

export { Button, SpanForSVG };
