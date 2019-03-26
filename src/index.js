// @flow
// eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store';
import { MainPage } from './pages/main-page';

import './assets/style.sass';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <MainPage />
      </Router>
    </Provider>
  ),
  // $FlowIgnore
  document.getElementById('root')
);
