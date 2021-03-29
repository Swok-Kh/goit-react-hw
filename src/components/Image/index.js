import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { replaceImgOnError } from '../../services';
import styles from './Image.module.scss';

class Image extends Component {
    state = {
        loaded: false,
    };
    onLoadImg = () => {
        this.setState({ loaded: true });
    };
    render() {
        const { src, alt, className, ...otherProps } = this.props;
        const { loaded } = this.state;
        return (
            <div className={styles.wrapper}>
                {loaded || <Loader />}
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={this.onLoadImg}
                    onError={replaceImgOnError}
                    {...otherProps}
                />
            </div>
        );
    }
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Image;
