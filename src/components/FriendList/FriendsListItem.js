import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import styles from './friendsList.module.scss';

const FriendsListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <Avatar src={avatar} alt={name} width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

export default FriendsListItem;
