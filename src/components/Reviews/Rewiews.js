import React, { Component } from 'react';
import RewiewCard from '../RewiewCard';
import Error from '../UI/Error';
import Loader from '../UI/Loader';
import Message from '../UI/Message';
import api from '../../services';
import styles from './rewiews.module.scss';
class Reviews extends Component {
  state = {
    rewiews: [],
    error: null,
    load: true,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { results } = await api.requestMovieRewiews(movieId);
      this.setState({ rewiews: results, load: false });
    } catch (error) {
      this.setState({ error: error.message, load: false });
    }
  }
  render() {
    const { rewiews, error, load } = this.state;
    return (
      <>
        {error && <Error text={error} />}
        {load && <Loader type="inLine" />}
        {rewiews.length === 0 && !load ? (
          <Message>I'm sorry. No reviews for this movie</Message>
        ) : (
          <ul className={styles.rewiews}>
            {rewiews.map(rewiew => (
              <RewiewCard key={rewiew.id} rewiew={rewiew} />
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default Reviews;