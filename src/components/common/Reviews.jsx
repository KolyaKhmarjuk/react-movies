import React from 'react';
import { useState, useEffect } from 'react';
import { fetchMoviesReviews } from 'components/API/FetchMovies';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.results.map(item => (
          <li key={item.id}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
