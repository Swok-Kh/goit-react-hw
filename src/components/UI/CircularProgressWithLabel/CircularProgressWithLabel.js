import PropTypes from 'prop-types';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  percentage: { display: 'block', transform: 'translate(-50%, -52%)' },
});

const CircularProgressWithLabel = ({ progress }) => {
  const styles = useStyles();
  return (
    <Box position="relative">
      <CircularProgress variant="determinate" value={progress} />
      <Box position="absolute" top="50%" left="50%">
        <Typography
          variant="caption"
          color="textSecondary"
          className={styles.percentage}
        >
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
};

CircularProgressWithLabel.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default CircularProgressWithLabel;
