import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import Title from '../Title';
import Button from '../Button';
import Loader from '..//Loader';
import Modal from '..//Modal';
import styles from './ImageGallery.module.scss';
import { requestPhotos } from '../../services';

class ImageGallery extends Component {
  state = {
    photos: [],
    isLoading: false,
    modal: { alt: null, src: null },
    page: 1,
    error: null,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
  }
  getSnapshotBeforeUpdate() {
    return document.documentElement.scrollHeight - 140;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { page: prevPage, isLoading: prevIsLoading } = prevState;
    const { page, isLoading, photos } = this.state;
    const { query: prevQuery } = prevProps;
    const { query } = this.props;
    if (prevQuery !== query) {
      this.setState({ page: 1, photos: [], isLoading: true, error: null });
      return;
    }
    if (photos.length === 0 && prevIsLoading !== isLoading) {
      this.updatePhotos(snapshot);
      return;
    }
    if (prevPage !== page) {
      this.updatePhotos(snapshot);
    }
  }
  updatePhotos(scrollSnapshot) {
    const { page } = this.state;
    const { query } = this.props;
    requestPhotos({
      query,
      page,
    })
      .then(response => {
        if (response.data.hits.length === 0) {
          this.setState({
            error: 'No images',
          });
          return;
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...response.data.hits],
        }));
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        this.scrollWhenUpdated(scrollSnapshot);
      });
  }
  handleLoadMore = () => {
    const { error } = this.state;
    if (!error)
      this.setState(prevState => ({
        isLoading: true,
        page: prevState.page + 1,
      }));
  };
  handleModal = (src = null, alt = null) => {
    this.setState({
      modal: {
        alt,
        src,
      },
    });
  };
  scrollWhenUpdated = (scrollTo) => {
    if (this.state.page !== 1)
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
  };
  render() {
    const { photos, isLoading, error, modal } = this.state;
    const { handleSearch, query } = this.props;
    return (
      <>
        <Title>{query.slice(0, 1).toLocaleUpperCase() + query.slice(1)}</Title>
        <ul className={styles.wrapper}>
          {photos.map(({ webformatURL, largeImageURL, tags }, index) => (
            <ImageGalleryItem
              key={index}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              handleModal={this.handleModal}
              handleSearch={handleSearch}
            />
          ))}
        </ul>
        {isLoading ? (
          <Loader type="inLine" />
        ) : !error ? (
          <Button onClick={this.handleLoadMore} />
        ) : (
              <Title>{error}</Title>
            )}
        {modal.src && (
          <Modal
            src={modal.src}
            alt={modal.alt}
            handleModal={this.handleModal}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default ImageGallery;
