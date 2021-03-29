import { Box, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Context } from '../GalleryProvider';
import useSearchbarStyles from './useSearchbarStyles';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const { fetchImages } = useContext(Context);
  const styles = useSearchbarStyles();

  const handleSubmit = e => {
    e.preventDefault();
    fetchImages(input);
    setInput('');
  };

  const handleChange = e => {
    setInput(e.target.value);
  };
  return (
    <Box ml="auto">
      <form onSubmit={handleSubmit}>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <Search />
          </div>
          <InputBase
            onChange={handleChange}
            value={input}
            placeholder="Search…"
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </form>
    </Box>
  );
};

export default Searchbar;
