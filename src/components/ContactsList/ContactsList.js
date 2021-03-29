import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteContact } from '../../redux/contactsReducer';

import Button, { iconsMap } from '../UI/Button';

import styles from './contactList.module.scss';
import transitionStyles from '../../scss/transition/translate.module.scss';

const animateStyles = {
  timeout: 250,
  classNames: transitionStyles,
  unmountOnExit: true,
};

const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.wrapper}>
      {contacts && contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <CSSTransition {...animateStyles} key={id}>
            <li className={styles.item}>
              {name}: {number}
              <Button
                className={styles.button}
                icon={iconsMap.delete}
                onClick={() => {
                  onDelete(id);
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDelete: PropTypes.func.isRequired,
};

const filterItems = (items, filter) =>
  items.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterItems(items, filter),
});
const mapDispatchToProps = {
  onDelete: deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
