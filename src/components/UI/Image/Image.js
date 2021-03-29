import { Box, CircularProgress } from '@material-ui/core';
import { useIsImageLoaded } from '../../../hooks';
import useImageStyle from './useImageStyle';

const Image = ({ src, alt, isContain }) => {
  const [isImageLoaded, imageSrc] = useIsImageLoaded(src);
  const styles = useImageStyle();
  const imageStyle = isContain ? styles.imageContain : styles.imageCover;
  return (
    <>
      <Box className={styles.imageBox}>
        {isImageLoaded ? (
          <img src={imageSrc} alt={alt} className={imageStyle} />
        ) : (
          <CircularProgress />
        )}
      </Box>
    </>
  );
};

export default Image;
