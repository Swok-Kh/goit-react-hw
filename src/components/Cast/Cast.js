import React, { Component } from 'react';
import Error from '../UI/Error';
import Message from '../UI/Message';
import Loader from '../UI/Loader';
import ActorCard from '../ActorCard';
import styles from './cast.module.scss';
import api from '../../services';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
    load: true,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { cast } = await api.requestMovieCredits(movieId);
      this.setState({ cast, load: false });
    } catch (error) {
      this.setState({ error: error.message, load: false });
    }
  }
  render() {
    const { cast, error, load } = this.state;
    return (
      <>
        {error && <Error text={error} />}
        {load && <Loader type="inLine" />}
        {cast.length === 0 && !load ? (
          <Message>
            I'm sorry. We have no information about the actors and actresses in
            this film.
          </Message>
        ) : (
            <ul className={styles.wrapper}>
              {cast.map(actor => (
                <ActorCard actor={actor} key={actor.id} />
              ))}
            </ul>
          )}
      </>
    );
  }
}

export default Cast;
