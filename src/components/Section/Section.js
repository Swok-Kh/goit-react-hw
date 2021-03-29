import PropTypes from 'prop-types';
import { Container, Paper, Typography, Box } from '@material-ui/core';
import { useIsMobile } from '../../hooks';

const Section = ({ children, title }) => {
  const isMobile = useIsMobile();
  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box mb={1} p={1}>
          <Box mb={2}>
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              component="h2"
              color="primary"
              align="center"
            >
              {title}
            </Typography>
          </Box>
          {children}
        </Box>
      </Paper>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
