import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.scss';

class Section extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <section>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
