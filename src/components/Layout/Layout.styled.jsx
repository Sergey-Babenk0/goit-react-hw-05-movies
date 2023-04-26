import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f7b75d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  margin-left: 20px;
  transition: background-color 0.3s ease-in-out;
  &.active {
    background-color: #f87b07;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 70px;
  background-color: rgb(245, 245, 245);
`;

export { Link, Container, Nav };
