import PropTypes from 'prop-types';
import { Badge, Button, Grid } from '@material-ui/core';
import { Mood, MoodBad, Exposure } from '@material-ui/icons';
import { useIsMobile } from '../../hooks';

const mapButtonStyle = {
  good: { variant: 'outlined', color: 'primary', icon: <Mood /> },
  neutral: { variant: 'outlined', color: 'default', icon: <Exposure /> },
  bad: { variant: 'outlined', color: 'secondary', icon: <MoodBad /> },
};

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const keys = Object.keys(options);
  const isMobile = useIsMobile();
  const handleClick = value => () => onLeaveFeedback(value);
  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      {keys.map(key => (
        <Grid item key={key}>
          <Badge badgeContent={options[key]} color="error" component="div">
            <Button
              variant={mapButtonStyle[key].variant}
              color={mapButtonStyle[key].color}
              endIcon={!isMobile && mapButtonStyle[key].icon}
              onClick={handleClick(key)}
            >
              {!isMobile && key}
              {isMobile && mapButtonStyle[key].icon}
            </Button>
          </Badge>
        </Grid>
      ))}
    </Grid>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
