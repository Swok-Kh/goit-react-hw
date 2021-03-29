import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import styles from './friendsList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.card}>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default FriendList;
