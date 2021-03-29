import styles from './title.module.scss';

export const titleTypesMap = {
  main: 'main',
  secondary: 'secondary',
};
const stylesMap = {
  [titleTypesMap.main]: styles.main,
  [titleTypesMap.secondary]: styles.secondary,
};

const Title = ({ children, className, type }) => {
  const stylesClasses = [stylesMap[type], className].join(' ');
  if (type === titleTypesMap.main)
    return <h1 className={stylesClasses}>{children}</h1>;
  if (type === titleTypesMap.secondary)
    return <h2 className={stylesClasses}>{children}</h2>;
};

Title.defaultProps = {
  type: titleTypesMap.main,
};

export default Title;
