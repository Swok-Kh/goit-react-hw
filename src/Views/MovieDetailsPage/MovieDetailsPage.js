import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Cast from '../../components/Cast';
import MovieCard from '../../components/MovieCard';
import Reviews from '../../components/Reviews';
import Error from '../../components/UI/Error';
import Loader from '../../components/UI/Loader';
import Button from '../../components/UI/Button';
import api from '../../services';
import styles from './movieDetailsPage.module.scss';
import paths from '../../Router/paths';
class MovieDetailsPage extends Component {
  state = {
    movie: null,
    error: null,
    load: true,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const movie = await api.requestDetails(movieId);
      this.setState({ movie, load: false });
    } catch (error) {
      this.setState({ error: error.message, load: false });
    }
  }
  handleGoBack = () => {
    const { history } = this.props
    history.push(this.props.location?.state?.from || paths.MOVIES)
  };
  render() {
    const { url, path } = this.props.match;
    const { movie, error, load } = this.state;
    const from = this.props.location?.state?.from;
    return (
      <div className={styles.container}>
        <Button
          className={styles.button}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </Button>
        {error && <Error text={error} />}
        {load && <Loader type="inLine" />}
        {movie && (
          <>
            <MovieCard movie={movie} />
            <nav className={styles.navigation}>
              <NavLink
                to={{ pathname: `${url}/cast`, state: { from } }}
                className={styles.link}
                activeClassName={styles.active}
              >
                Cast
              </NavLink>
              <NavLink
                to={{ pathname: `${url}/reviews`, state: { from } }}
                className={styles.link}
                activeClassName={styles.active}
              >
                Reviews
              </NavLink>
            </nav>
          </>
        )}
        <Switch>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
