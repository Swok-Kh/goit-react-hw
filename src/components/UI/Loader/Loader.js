import React from 'react';
import SvgIcon, { iconsSizesMap, iconsTypesMap } from '../SvgIcon';
import styles from './loader.module.scss';

const Loader = ({ className }) => {
  const stylessClasses = [className, styles.wrapper].join(' ');
  return (
    <div className={stylessClasses}>
      <SvgIcon
        className={styles.spinner}
        icon={iconsTypesMap.spinner}
        size={iconsSizesMap.medium}
      />
    </div>
  );
};

export default Loader;
