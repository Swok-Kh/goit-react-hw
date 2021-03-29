import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withNotify } from '../../Notify';
import Message from './Message';
import styles from './notify.module.scss';
import transitionStyles from '../../../scss/transition/translate.module.scss';

const notifyStylesMap = {
  'top-left': styles.topLeft,
  'top-right': styles.topRight,
  'bottom-left': styles.bottomLeft,
  'bottom-right': styles.bottomRight,
};

const Notify = ({ notify, position }) => {
  const { messages, deleteMessage } = notify;
  return (
    <TransitionGroup className={notifyStylesMap[position]}>
      {messages.map(({ id, text, type }) => (
        <CSSTransition
          key={id}
          classNames={transitionStyles}
          timeout={250}
          unmountOnExit
        >
          <Message
            id={id}
            text={text}
            type={type}
            deleteMessage={deleteMessage}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

Notify.defaultProps = {
  position: 'top-right',
};

export default withNotify(Notify);
