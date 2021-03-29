import { makeStyles } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

const useGalleryStyles = () => {
  const isLargeDesktop = useMediaQuery({ minWidth: 1600 });
  const isMiddleDesktop = useMediaQuery({ maxWidth: 1599, minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });

  const height =
    (isLargeDesktop && 170) ||
    (isMiddleDesktop && 200) ||
    (isTablet && 300) ||
    350;

  const xs =
    (isLargeDesktop && 3) || (isMiddleDesktop && 4) || (isTablet && 6) || 12;

  const useStyles = makeStyles({
    cardMedia: {
      height: height + 'px',
    },
    list: {
      padding: '0',
      listStyle: 'none',
    },
  });

  const styles = useStyles();

  return { styles, xs, height };
};

export default useGalleryStyles;
