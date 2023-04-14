import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'components/API/FetchMovies';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <ul>
        {movies &&
          movies.results.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: {
                      location,
                    },
                  },
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
