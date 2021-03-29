import axios from 'axios';

const API_KEY = '57cbe5c676697b3e8db1f81a9bfebc1c';

async function requestTrendings() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  );
  return data;
}
async function requestSearchMovie(query, page = 1) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}}&include_adult=false`,
  );
  return data;
}
async function requestDetails(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );

  return data;
}
async function requestMovieRewiews(movieId, page = 1) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${page}}`,
  );

  return data;
}
async function requestMovieCredits(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );

  return data;
}

const theMovieDBApi = {
  requestTrendings,
  requestSearchMovie,
  requestDetails,
  requestMovieRewiews,
  requestMovieCredits,
};

export default theMovieDBApi;
