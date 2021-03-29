import { useContext } from 'react';
import { Backdrop, Box, Button, Link } from '@material-ui/core';
import { Context } from '../GalleryProvider/GalleryProvider';
import Image from '../UI/Image';
import useModalStyles from './useModalStyles';

const Modal = () => {
  const { modalImage, modalIsOpen, closeModal } = useContext(Context);
  const styles = useModalStyles();
  return (
    <Backdrop
      open={modalIsOpen}
      onClick={closeModal}
      className={styles.backdrop}
    >
      {modalIsOpen && (
        <Box className={styles.imageBox}>
          <Image src={modalImage.src} alt={modalImage.alt} isContain />
          <Box className={styles.linkBox}>
            <Link
              href={modalImage.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Button color="primary" variant="contained">
                Download
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Backdrop>
  );
};

export default Modal;
