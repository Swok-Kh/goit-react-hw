import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { withNotify } from '../Notify';
import {
  fetchAllContacts,
  getIsError,
  getIsLoading,
} from '../../redux/contacts';

import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import ContactsFilter from '../ContactsFilter';
import Title, { titleTypesMap } from '../UI/Title';
import Loader from '../UI/Loader';

import styles from './contactsBook.module.scss';
import translateStyles from '../../scss/transition/translate.module.scss';
import { connect } from 'react-redux';

class ContactsBook extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }
  componentDidUpdate(prevProps) {
    const { error: prevError } = prevProps;
    const {
      error,
      notify: { addMessage },
    } = this.props;

    if (error && error !== prevError) addMessage(error);
  }
  render() {
    const { loading } = this.props;
    return (
      <div className={styles.card}>
        <CSSTransition
          in
          appear
          classNames={translateStyles}
          timeout={250}
          unmountOnExit
        >
          <>
            <Title className={styles.title}>Phonebook</Title>
            {loading && <Loader className={styles.loader} />}
          </>
        </CSSTransition>
        <ContactForm />
        <Title type={titleTypesMap.secondary}>Contacts</Title>
        <ContactsFilter />
        <ContactsList />
      </div>
    );
  }
}

ContactsBook.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  loading: getIsLoading(state),
  error: getIsError(state),
});
const mapDispatchToProps = {
  fetchAllContacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNotify(ContactsBook));
