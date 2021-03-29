import PropTypes from 'prop-types';
import noImg from '../../images/no-image-icon.png';

const Avatar = ({ className, width, src, alt }) => {
  return <img src={src} alt={alt} className={className} width={width} />;
};
Avatar.defaultProps = {
  src: noImg,
  alt: 'image',
  width: '',
  className: '',
};
Avatar.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
