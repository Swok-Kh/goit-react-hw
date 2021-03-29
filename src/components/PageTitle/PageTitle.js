import PropTypes from 'prop-types';
import { Slide, Typography } from '@material-ui/core';

const PageTitle = ({ text }) => {
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Typography color="primary" component="h1" variant="h3">
        {text}
      </Typography>
    </Slide>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
