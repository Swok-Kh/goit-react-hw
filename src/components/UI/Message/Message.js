import React from 'react';
import styles from './message.module.scss';

const Message = ({ className, children, ...restProps }) => {
  const stylesClasses = [className, styles.text].join(' ');
  return (
    <p className={stylesClasses} {...restProps}>
      {children}
    </p>
  );
};

export default Message;