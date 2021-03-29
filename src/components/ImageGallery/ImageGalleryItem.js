import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import styles from './ImageGallery.module.scss';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  handleModal,
  handleSearch,
}) => {
  return (
    <li className={styles.item}>
      <Image
        src={webformatURL}
        alt={tags}
        className={styles.image}
        onClick={() => {
          handleModal(largeImageURL, tags);
        }}
      />
      <div className={styles.tags}>
        <ul className={styles.tags}>
          {tags.split(',').map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleSearch(item.trim());
              }}
            >
              {item.trim()}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
