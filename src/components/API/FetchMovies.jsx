const KEY = '?api_key=c70b39411477d027ba1d4b2d81ddb9d1';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWitchHendeling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found!'));
}

export function fetchTrending() {
  return fetchWitchHendeling(`${BASE_URL}/trending/movie/week${KEY}`);
}

export function fetchMoviesById(id) {
  return fetchWitchHendeling(`${BASE_URL}/movie/${id}${KEY}`);
}

export function fetchSearchMovies(query) {
  return fetchWitchHendeling(`${BASE_URL}/search/movie${KEY}&query=${query}`);
}

export function fetchMoviesCredits(id) {
  return fetchWitchHendeling(
    `${BASE_URL}/movie/${id}/credits${KEY}&language=en-US`
  );
}

export function fetchMoviesReviews(id) {
  return fetchWitchHendeling(
    `${BASE_URL}/movie/${id}/reviews${KEY}&language=en-US&page=1`
  );
}
