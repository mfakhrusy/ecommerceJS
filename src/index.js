import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import store from 'store/configureStore';
// import registerServiceWorker from 'registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';

require('styles/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

// registerServiceWorker();

// Check for browser support of service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
    // Successful registration
      console.log('Hooray. Registration successful, scope is:', registration.scope);
    })
    .catch((error) => {
    // Failed registration, service worker won’t be installed
      console.log('Whoops. Service worker registration failed, error:', error);
    });
}
