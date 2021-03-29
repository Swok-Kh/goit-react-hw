import { useContext } from 'react';
import { Grid, Button } from '@material-ui/core';
import { Context } from '../GalleryProvider';

const GalleryItemButtons = ({ tags }) => {
  const { fetchImages } = useContext(Context);
  return (
    <Grid container justify="center">
      {tags.map((tag, index) => (
        <Grid item key={index}>
          <Button
            onClick={() => {
              fetchImages(tag.trim());
            }}
          >
            {tag.trim()}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryItemButtons;
