# Notify

You can use this component to display a notification. It may be warnings, errors
or success messages. The component use context to store messages. The message
can auto delete after delay or stay on the display.

## How to use:

### Add `NotifyProvider` to `App.js`:

Notification can be shown in different pieces of display. You can set "position"
in NotifyProvider to change display style. Default position is 'top-right'.

It may be:

- top-left
- top-right
- bottom-left
- bottom-right

Example:

```js
import { NotifyProvider } from 'path/to/Notify';

class App extends Component {
  render() {
    return (
      <>
        <NotifyProvider position='top-left'>
        // Wrap app for use "Notify" context
          {your code}
        </NotifyProvider>
      </>
    );
  }
}
```

### Add `HOC` => `withNotify`

This is needed to get context in your component.

```js
import { withNotify } from 'path/to/Notify';
//
// YourComponent
//
export default withNotify(YourComponent);
```

Then you can use `props.notify.addMessage` is this component. Notifications have
3 types: 'warning', 'success' or 'error'. And they can be removed automatically
or not. For this you can take options in addMessage method.

Options =>

```js
{
  delay: 5000, // Delay in ms. (default: 3000)
  notDelete: true, // If true => messege will not delete. (default: false)
  type: 'warning', // One of 'warning', 'success', 'error'. (default: error)
}
```

Example:

```js
props.notify.addMessage('Your message');
```

or

```js
options = {
  notDelete: true,
  type: 'warning',
};
props.notify.addMessage('Your message', options);
```
