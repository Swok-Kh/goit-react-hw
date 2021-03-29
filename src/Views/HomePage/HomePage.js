import React, { Component } from 'react';
import Error from '../../components/UI/Error';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/UI/Loader';
import api from '../../services';
import styles from './homePage.module.scss';
class HomePage extends Component {
    state = {
        trendings: [],
        error: null,
        load: true,
    };

    async componentDidMount() {
        try {
            const response = await api.requestTrendings();
            this.setState({ trendings: response.results, load: false });
        } catch (error) {
            this.setState({ error: error.message, load: false });
        }
    }
    render() {
        const { trendings, error, load } = this.state;
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Trendings today</h1>
                {error && <Error text={error} />}
                {trendings.length > 0 && (
                    <MoviesList movies={trendings} />
                )}
                {load && <Loader type="inLine" />}
            </div>
        );
    }
}

export default HomePage;