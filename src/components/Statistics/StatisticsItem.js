import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Grid,
} from '@material-ui/core';
import { Mood, MoodBad, Exposure } from '@material-ui/icons';
import LinearProgressWithLabel from '../UI/LinearProgressWithLabel';

const mapLabelIcon = {
  good: <Mood />,
  neutral: <Exposure />,
  bad: <MoodBad />,
};

const StatisticsItem = ({ label, value, total }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.floor((value / total) * 100) || 0);
  }, [value, total]);

  return (
    <Grid container component="li">
      <Grid item xs={12}>
        <LinearProgressWithLabel progress={progress} />
      </Grid>
      <Grid item xs={12}>
        <ListItem component="div">
          <ListItemIcon>{mapLabelIcon[label]}</ListItemIcon>
          <ListItemText
            primary={
              <Typography>
                {label.slice(0, 1).toUpperCase() + label.slice(1)}: {value}
              </Typography>
            }
          />
        </ListItem>
      </Grid>
    </Grid>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.oneOf([...Object.keys(mapLabelIcon)]).isRequired,
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default StatisticsItem;
