import PropTypes from 'prop-types';

import sprite from '../../../images/sprite.svg';

const sizesMap = {
  small: '20',
  medium: '40',
  large: '60',
};

export const iconsMap = {
  close: 'close',
  delete: 'delete'
}

const SvgIcon = ({ icon, size }) => {
  return (
    <svg width={sizesMap[size]} height={sizesMap[size]} fill="currentColor">
      <use xlinkHref={`${sprite}#${iconsMap[icon]}`} />
    </svg>
  );
};

SvgIcon.defaultProps = {
  icon: iconsMap.close,
  size: 'small',
};

SvgIcon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default SvgIcon;
