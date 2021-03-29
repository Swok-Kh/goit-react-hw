import PropTypes from 'prop-types';
import sprite from '../../../images/sprite.svg';

const sizeMap = {
  small: '20',
  medium: '40',
  large: '60',
};

const SvgIcon = ({ icon, size }) => {
  return (
    <svg width={sizeMap[size]} height={sizeMap[size]} fill="currentColor">
      <use xlinkHref={`${sprite}#${icon}`} />
    </svg>
  );
};

SvgIcon.defaultProps = {
  icon: 'close',
  size: 'small',
};

SvgIcon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default SvgIcon;
