import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store'

// Redux
import { Provider } from 'react-redux';




// store to pass to Provider
// import store from './redux/store'


import './index.css';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);










// REDUX 2 VIDEO 1 @ 4/29/2021







