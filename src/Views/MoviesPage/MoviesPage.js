import React, { Component } from 'react';
import Error from '../../components/UI/Error';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/UI/Loader';
import Message from '../../components/UI/Message';
import api from '../../services';
import styles from './moviesPage.module.scss';

class MoviesPage extends Component {
  state = {
    input: '',
    movies: [],
    error: null,
    load: false,
  };
  componentDidMount() {
    const query = this.getSearchQuery(this.props.location.search, 'query');
    if (query) {
      this.setState({ load: true });
      this.searchMovies(query);
    }
  }
  getSearchQuery(searchString, query) {
    return new URLSearchParams(searchString).get(query);
  }
  async componentDidUpdate(prevProps) {
    const query = this.getSearchQuery(this.props.location.search, 'query');
    const prevQuery = this.getSearchQuery(prevProps.location.search, 'query');
    if (query !== prevQuery) this.searchMovies(query);
  }
  async searchMovies(query) {
    try {
      const { results } = await api.requestSearchMovie(query);
      this.setState({
        movies: results,
        input: query,
        load: false,
        error: null,
      });
    } catch (error) {
      this.setState({ error: error.message, load: false });
    }
  }
  onChangeInput = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    const query = this.getSearchQuery(this.props.location.search, 'query');
    const { input } = this.state;
    const { pathname } = this.props.location;
    if (input !== query && input !== '') {
      this.props.history.push({
        pathname,
        search: `query=${input}`,
      });
      this.setState({ load: true });
    }
  };
  render() {
    const { movies, input, error, load } = this.state;
    const query = this.getSearchQuery(this.props.location.search, 'query')
    return (
      <div className={styles.container}>
        <form onSubmit={this.onSubmitForm} className={styles.form}>
          <input
            type="text"
            autoComplete="false"
            placeholder="Enter movie"
            value={input}
            onChange={this.onChangeInput}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
        {error && <Error text={error} />}
        {load && <Loader type="inLine" />}
        {movies.length > 0 && <MoviesList movies={movies} />}
        {query !== null && movies.length === 0 && !load && (
          <Message>No found</Message>
        )}
      </div>
    );
  }
}
export default MoviesPage;
