import PropTypes from 'prop-types';
import styles from './statistics.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.card}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
      <ul className={styles.list}>
        {stats.map(({ label, percentage, id }) => (
          <li
            key={id}
            className={styles.listItem}
            style={{
              backgroundColor: getRandomColorRGB(),
              width: 100 / stats.length + '%',
            }}
          >
            <span className={styles.listLabel}>{label}</span>
            <span className={styles.listPercentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statistics;

function getRandomColor() {
  return Math.floor(Math.random() * 254) - 40;
}
function getRandomColorRGB() {
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}
