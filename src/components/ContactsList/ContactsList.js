import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  deleteContact,
  getfilteredContacts,
} from '../../redux/contacts';

import Button, { iconsTypesMap } from '../UI/Button';

import styles from './contactList.module.scss';
import transitionStyles from '../../scss/transition/translate.module.scss';

const animateStyles = {
  timeout: 250,
  classNames: transitionStyles,
  unmountOnExit: true,
};

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.wrapper}>
      {contacts && contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <CSSTransition {...animateStyles} key={id}>
            <li className={styles.item}>
              {name}: {number}
              <Button
                className={styles.button}
                icon={iconsTypesMap.delete}
                onClick={() => {
                  deleteContact(id);
                }}
              ></Button>
            </li>
          </CSSTransition>
        ))
      ) : (
          <CSSTransition {...animateStyles}>
            <li className={styles.item}>No contacts</li>
          </CSSTransition>
        )}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getfilteredContacts(state),
});
const mapDispatchToProps = {
  deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
