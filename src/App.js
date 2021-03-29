import { Box } from '@material-ui/core';
import AppBar from './components/AppBar';
import Gallery from './components/Gallery';
import Modal from './components/Modal';

const App = () => {
  return (
    <>
      <AppBar />
      <Box pt={8}>
        <Gallery />
      </Box>
      <Modal />
    </>
  );
};

export default App;
