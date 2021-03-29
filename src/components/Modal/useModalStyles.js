import { makeStyles } from '@material-ui/core';

export default makeStyles({
  backdrop: { zIndex: 1100 },
  imageBox: { position: 'relative', height: '95%', width: '95%' },
  linkBox: {
    position: 'absolute',
    bottom: '5px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  link: {
    '&:hover': { textDecoration: 'none' },
  },
});
