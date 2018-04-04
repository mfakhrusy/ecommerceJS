import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { BrowserRouter } from 'react-router-dom';

// for basic layout, use SASS from below import.
// only use material-ui for the component
require('styles/main.scss');

// const theme = createMuiTheme();

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </MuiThemeProvider>,
//   document.getElementById('root'),
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

