import { React, lazy } from 'react';
import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'components/API/FetchMovies';
import { Link, useHistory, useLocation } from 'react-router-dom';

const GoBackButton = lazy(() => import('components/common/GoBackButton'));

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const searchOrder = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (search === '') {
      fetchSearchMovies(searchOrder).then(setMovies);
      return;
    }
    fetchSearchMovies(search).then(setMovies);
  }, [search, searchOrder]);

  const hendelChange = e => {
    setQuery(e.target.value);
  };

  const reset = () => {
    setQuery('');
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearch(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
    reset();
  };

  return (
    <>
      <GoBackButton />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={hendelChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <button type="submit">Search</button>
      </form>
      {movies &&
        movies.results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
    </>
  );
};

export default MoviesPage;
