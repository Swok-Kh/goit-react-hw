import PropTypes from 'prop-types';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import { useIsMobile } from '../../../hooks';

const LinearProgressWithLabel = ({ progress }) => {
  const isMobile = useIsMobile();
  return (
    <Box position="relative" ml={9} mr={isMobile ? 1 : 9}>
      <Box position="absolute" width="100%" top={36} left={0}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box position="absolute" top={8} right={0}>
        <Typography variant="h6" component="p" color="primary">
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default LinearProgressWithLabel;
