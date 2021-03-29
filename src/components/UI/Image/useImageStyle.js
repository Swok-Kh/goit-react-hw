import { makeStyles } from '@material-ui/core';

export default makeStyles({
  imageBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  imageCover: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageContain: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
