import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import styles from './profile.module.scss';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const statsArr = [];
  for (const key in stats) {
    if (Object.hasOwnProperty.call(stats, key)) {
      statsArr.push({ label: key, quantity: stats[key] });
    }
  }
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <Avatar
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}> {tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {statsArr.map(({ label, quantity }, index) => (
          <li
            key={index + label}
            className={styles.statsItem}
            style={{ width: `${100 / statsArr.length}%` }}
          >
            <span className={styles.statsLabel}>{label}</span>
            <span className={styles.statsQuantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
Profile.defaultProps = {
  tag: 'No tag',
  location: 'No location details',
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
