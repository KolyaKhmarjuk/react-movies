import React from 'react';
import { useEffect, useState } from 'react';
import { fetchMoviesCredits } from 'components/API/FetchMovies';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState('');

  useEffect(() => {
    fetchMoviesCredits(movieId).then(setCast);
  }, [movieId]);

  console.log(cast.cast);

  return (
    <ul>
      {cast &&
        cast.cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt=""
            />
            <p>{item.name}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
