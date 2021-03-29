import React from 'react';

import SvgIcon from '../SvgIcon/SvgIcon';

import styles from './button.module.scss';

const styllesMap = {
  main: styles.main,
  secondary: styles.secondary,
};

const Button = ({ children, className, type, icon, ...restProps }) => {
  const stylesClasses = [styllesMap[type], className].join(' ');
  return (
    <button className={stylesClasses} {...restProps}>
      {children ?? false}
      {icon && <SvgIcon icon={icon} />}
    </button>
  );
};

Button.defaultProps = {
  type: 'main',
};

export default Button;
