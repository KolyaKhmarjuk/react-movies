import { React, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';

const Navigations = lazy(() => import('./Navigations/Navigations'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const NotFound = lazy(() => import('./common/NotFound'));

const App = () => {
  return (
    <div>
      <Navigations />
      <Suspense>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

App.propTypes = {};

export default App;
