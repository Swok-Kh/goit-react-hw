import PropTypes from 'prop-types';

import sprite from '../../../images/sprite.svg';

export const iconsSizesMap = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const sizesMap = {
  small: '20',
  medium: '40',
  large: '60',
};

export const iconsTypesMap = {
  close: 'close',
  delete: 'delete',
  spinner: 'spinner',
};

const SvgIcon = ({ icon, size, ...restProps }) => {
  return (
    <svg
      width={sizesMap[size]}
      height={sizesMap[size]}
      fill="currentColor"
      {...restProps}
    >
      <use xlinkHref={`${sprite}#${iconsTypesMap[icon]}`} />
    </svg>
  );
};

SvgIcon.defaultProps = {
  icon: iconsTypesMap.close,
  size: iconsSizesMap.small,
};

SvgIcon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
};

export default SvgIcon;
