import { Outlet } from 'react-router-dom';
import { Link, Container, Nav } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
          </Nav>
        </Container>
      </header>
      <main>
        <Container>
          <Suspense fallback={<p>..Loading</p>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export { Layout };
