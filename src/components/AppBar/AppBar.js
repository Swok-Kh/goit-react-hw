import React, { useContext } from 'react';
import {
  AppBar as MuiAppBar,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Searchbar from '../Searchbar';
import { Context } from '../GalleryProvider';

const AppBar = () => {
  const { query } = useContext(Context);
  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="md">
        <Toolbar>
          <Typography>
            {query.slice(0, 1).toUpperCase() + query.slice(1)}
          </Typography>
          <Searchbar />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
