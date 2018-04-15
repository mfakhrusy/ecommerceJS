import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import store from 'store/configureStore';
import { BrowserRouter } from 'react-router-dom';

require('styles/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <Provider>
//     <h1>tes</h1>
//   </Provider>,
//   document.getElementById('root'),
// );
