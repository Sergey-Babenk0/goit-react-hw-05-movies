import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from '../components/Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const MoviePage = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const CastPage = lazy(() => import('../pages/Cast/Cast'));
const ReviewsPage = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviePage />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />}></Route>
          <Route path="reviews" element={<ReviewsPage />}></Route>
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
