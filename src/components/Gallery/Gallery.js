import { useContext, useEffect } from 'react';
import {
  Grid,
  Container,
  Button,
  CircularProgress,
  Box,
  Typography,
} from '@material-ui/core';
import { Context } from '../GalleryProvider';
import GalleryItem from './GalleryItem';
import useGalleryStyles from './useGalleryStyles';

const Gallery = () => {
  const { styles, height } = useGalleryStyles();
  const { images, updateImages, isLoading } = useContext(Context);

  useEffect(() => {
    if (images.length < 13) {
      window.scrollTo({ behavior: 'smooth', top: 0 });
      return;
    }
    window.scrollBy({ behavior: 'smooth', top: height + 40 });
  }, [height, images]);

  return (
    <Container maxWidth="xl">
      {images.length === 0 && (
        <Typography color="primary" variant="h4" component="p" align="center">
          There are no images. Enter your search query above
        </Typography>
      )}
      {images.length > 1 && (
        <>
          <Grid container component="ul" spacing={2} className={styles.list}>
            {images.map(image => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </Grid>
          <Box pt={2} display="flex" justifyContent="center">
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => updateImages()}
              >
                Load More...
              </Button>
            )}
          </Box>
        </>
      )}
    </Container>
  );
};

export default Gallery;
