import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Box, LinearProgress, CircularProgress } from '@material-ui/core';

const Loader = ({ type }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 599px)' });

  if (type === 'linear')
    return (
      <Box width="100%" position="fixed" top={isMobile ? 56 : 64} left={0}>
        <LinearProgress color="secondary" />
      </Box>
    );
  if (type === 'circular')
    return (
      <Box width="100%" position="fixed" top='50%' left={0}>
        <Box width='40px' m='auto'>
          <CircularProgress />
        </Box>
      </Box>
    );
};

Loader.defaultProps = {
  type: 'linear',
};

Loader.propTypes = {
  type: PropTypes.oneOf(['linear', 'circular']),
};

export default Loader;
