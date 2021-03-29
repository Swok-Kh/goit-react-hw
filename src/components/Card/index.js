import styles from './card.module.scss';

const Card = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Card;
