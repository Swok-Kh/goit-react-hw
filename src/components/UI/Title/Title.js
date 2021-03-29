import styles from './title.module.scss';

const stylesMap = {
  main: styles.main,
  secondary: styles.secondary,
};

const Title = ({ children, className, type }) => {
  const stylesClasses = [stylesMap[type], className].join(' ');
  if (type === 'main') return <h1 className={stylesClasses}>{children}</h1>;
  if (type === 'secondary')
    return <h2 className={stylesClasses}>{children}</h2>;
};

Title.defaultProps = {
  type: 'main',
};

export default Title;
