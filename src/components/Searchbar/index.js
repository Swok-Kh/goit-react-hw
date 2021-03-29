import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import styles from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    input: '',
  };
  onChangeInput = e => {
    this.setState({ input: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <header className={styles.wrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" name="Search" className={styles.button}>
            <SearchIcon />
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
