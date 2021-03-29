import { createContext, useState } from 'react';
import { requestPhotos } from '../../services';

export const Context = createContext();

const useGallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(() => ({
    src: '',
    alt: '',
    url: '',
  }));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchImages = async query => {
    setIsLoading(true);
    const response = await requestPhotos({ query, page: 1 });
    setPage(2);
    setQuery(query);
    setImages(response.data.hits);
    setIsLoading(false);
  };

  const updateImages = async () => {
    setIsLoading(true);
    const response = await requestPhotos({ query, page });
    setPage(prev => prev + 1);
    setImages(prev => [...prev, ...response.data.hits]);
    setIsLoading(false);
  };

  const openModal = ({ src, alt, url }) => {
    setModalImage({ src, alt, url });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalImage({ src: '', alt: '', url: '' });
    setModalIsOpen(false);
  };

  return {
    fetchImages,
    updateImages,
    isLoading,
    images,
    query,
    openModal,
    closeModal,
    modalIsOpen,
    modalImage,
  };
};

export const GalleryProvider = ({ children }) => {
  const gallery = useGallery();
  return <Context.Provider value={gallery}>{children}</Context.Provider>;
};
