import { React, lazy } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchMoviesById } from 'components/API/FetchMovies';
import {
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';

const Cast = lazy(() => import('components/common/Cast'));
const Reviews = lazy(() => import('components/common/Reviews'));
const GoBackButton = lazy(() => import('components/common/GoBackButton'));

const MovieDetailsPage = () => {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchMoviesById(movieId).then(setMovie);
  }, [movieId]);

  const { title, overview, poster_path, popularity, genres } = movie;

  return (
    <>
      <GoBackButton />
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title}`}
        />
        <div>
          <h2>{title}</h2>
          <p>User Score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie &&
              genres.map(genr => (
                <li key={genr.id}>
                  <p>{genr.name}</p>
                </li>
              ))}
          </ul>
        </div>
        <hr />

        <NavLink to={`${url}/cast`}>Cast</NavLink>
        <NavLink to={`${url}/reviews`}>Reviews</NavLink>

        <Route exact path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route exact path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </div>
    </>
  );
};

export default MovieDetailsPage;
