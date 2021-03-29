import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import styles from './Image.module.scss';
import errorImage from '../../../images/no-image.png';
class Image extends Component {
  state = {
    load: true,
  };
  onLoad = () => {
    this.setState({ load: false });
  };
  onError(e) {
    e.target.src = errorImage;
  }
  render() {
    const { load } = this.state;
    const { src, alt, width } = this.props;
    const url = `https://image.tmdb.org/t/p/w${width}${src}`;
    return (
      <>
        <div className={styles.wrapper}>
          <img
            src={url}
            alt={alt}
            onLoad={this.onLoad}
            onError={this.onError}
          />
          {load && <Loader type="builtIn" />}
        </div>
      </>
    );
  }
}
Image.defaultProps = {
  alt: 'image',
  width: '200',
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
};

export default Image;