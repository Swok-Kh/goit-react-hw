import React, { createContext, Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notify from '../../Notify';

const { Provider, Consumer } = createContext();
const defaultOptions = {
  delay: 3000,
  type: 'error',
  notDelete: false,
}
class NotifyProvider extends Component {
  static Consumer = Consumer;

  addMessage = (text, options) => {
    const { delay, type, notDelete } = { ...defaultOptions, ...options }
    const id = uuidv4();
    const message = { text, id, type };
    this.setState(prevState => ({
      messages: [...prevState.messages, message],
    }));
    if (!notDelete)
      setTimeout(() => {
        this.deleteMessage(id);
      }, delay);
  };
  deleteMessage = id => {
    this.setState(prevState => ({
      messages: [...prevState.messages.filter(message => message.id !== id)],
    }));
  };
  state = {
    messages: [],
    addMessage: this.addMessage,
    deleteMessage: this.deleteMessage,
  };

  render() {
    return <Provider value={this.state}>
      {this.props.children}
      <Notify position={this.props.position} />
    </Provider>;
  }
}

export default NotifyProvider;
