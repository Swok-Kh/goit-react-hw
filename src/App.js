import React, { Component } from 'react';
import ContactsBook from './components/ContactsBook';
import { NotifyProvider } from './components/Notify';
class App extends Component {
  render() {
    return (
      <>
        <NotifyProvider>
          <ContactsBook />
        </NotifyProvider>
      </>
    );
  }
}

export default App;
