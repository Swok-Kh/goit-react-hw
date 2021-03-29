import { Component } from 'react';

import { NotifyProvider } from '../../Notify';

const withNotify = WrappedComponent => {
  return class WithNotify extends Component {
    render() {
      return (
        <NotifyProvider.Consumer>
          {context => <WrappedComponent {...this.props} notify={context} />}
        </NotifyProvider.Consumer>
      );
    }
  };
};

export default withNotify;
