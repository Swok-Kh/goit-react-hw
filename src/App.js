import React, { Component } from 'react';
import ContactsBook from './components/ContactsBook';
import { NotifyProvider } from './components/Notify';
import { Provider } from 'react-redux';
import store from "./redux/store";
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <NotifyProvider>
            <ContactsBook />
          </NotifyProvider>
        </Provider>
      </>
    );
  }
}

export default App;
