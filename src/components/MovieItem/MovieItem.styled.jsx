import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Item = styled.li`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #000000;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
export { Item, StyledLink };
