import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grow,
  Grid,
} from '@material-ui/core';
import { useContext } from 'react';
import { Context } from '../GalleryProvider';
import useGalleryStyles from './useGalleryStyles';
import Image from '../UI/Image/';
import GalleryItemButtons from './GalleryItemButtons';

const GalleryItem = ({ image }) => {
  const { openModal } = useContext(Context);
  const { styles, xs } = useGalleryStyles();
  const tags = image.tags.split(',');

  const handleClick = () => {
    openModal({
      src: image.largeImageURL,
      alt: image.tags,
      url: image.pageURL,
    });
  };
  return (
    <Grid item xs={xs} component="li">
      <Grow in={true}>
        <Card>
          <CardActionArea>
            <CardMedia
              title={image.tags}
              className={styles.cardMedia}
              onClick={handleClick}
            >
              <Image src={image.webformatURL} alt={image.tags} />
            </CardMedia>
          </CardActionArea>
          <CardContent>
            <GalleryItemButtons tags={tags} />
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
};

export default GalleryItem;
