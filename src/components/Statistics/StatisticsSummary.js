import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@material-ui/core';
import { Assignment, Equalizer } from '@material-ui/icons';
import CircularProgressWithLabel from '../UI/CircularProgressWithLabel';
import { useIsMobile } from '../../hooks';
import { useEffect, useState } from 'react';

const StatisticsSummary = ({ total, good }) => {
  const isMobile = useIsMobile();
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setPositive(Math.floor((good / total) * 100) || 0);
  }, [good, total]);

  return (
    <Grid container alignItems="center">
      <Grid item xs={isMobile ? 12 : 6}>
        <Box p={1} display="flex" alignItems="center" justifyContent="center">
          <Assignment />
          <Typography variant="h6">Total feedback: {total}</Typography>
        </Box>
      </Grid>
      <Grid item xs={isMobile ? 12 : 6}>
        <Box
          p={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight={44}
        >
          <Equalizer />
          <Typography variant="h6">
            Positive feedback: {positive === 0 && 'no'}
          </Typography>
          {positive !== 0 && <CircularProgressWithLabel progress={positive} />}
        </Box>
      </Grid>
    </Grid>
  );
};

StatisticsSummary.propTypes = {
  total: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};

export default StatisticsSummary;
