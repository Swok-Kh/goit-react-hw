import { useState } from 'react';
import errorImg from '../images/error.png';

export const useIsImageLoaded = url => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageSrc, setSrc] = useState('');
  const image = new Image();
  image.src = url;
  image.onload = () => {
    setIsImageLoaded(true);
    setSrc(url);
  };
  image.onerror = () => {
    setIsImageLoaded(true);
    setSrc(errorImg);
  };

  return [isImageLoaded, imageSrc];
};
