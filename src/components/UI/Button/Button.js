import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ className, onClick, children, ...restProps }) => {
  const stylesClasses = [styles.main, className].join(' ');
  return (
    <button className={stylesClasses} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = { onClick: PropTypes.func.isRequired };

export default Button;