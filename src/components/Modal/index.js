import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeydown);
  }
  handlerKeydown = e => {
    const { handleModal } = this.props;
    if (e.key === 'Escape') handleModal();
  };
  render() {
    const { src, alt, handleModal } = this.props;
    return createPortal(
      <div
        className={styles.overlay}
        onClick={e => {
          if (e.target === e.currentTarget) handleModal();
        }}
      >
        <Image src={src} alt={alt} className={styles.item} />
      </div>,
      modalRoot,
    );
  }
}

Modal.defaultProps = {
  alt: 'large image',
};
Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  handleModal: PropTypes.func.isRequired,
};

export default Modal;
