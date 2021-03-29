import PropTypes from "prop-types";

import Button, { iconsMap } from '../../UI/Button';

import styles from './notify.module.scss';

const notifyStylesMap = {
  error: styles.error,
  warning: styles.warning,
  success: styles.success,
};

const Message = ({ id, text, type, deleteMessage }) => {
  return (
    <div className={notifyStylesMap[type]}>
      {text}
      <Button
        type="secondary"
        icon={iconsMap.close}
        onClick={() => {
          deleteMessage(id);
        }}
      ></Button>
    </div>
  );
};

Message.defaultProps = {
  type: 'error'
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  deleteMessage: PropTypes.func.isRequired,
}

export default Message;
