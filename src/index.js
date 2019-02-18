import React from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './components/App'
import './App.css';
import './index.css';
import App from './components/App'
import './assets/css/base.css'
import './assets/css/style.css'
import {BrowserRouter,Route} from 'react-router-dom'
import store from "./store";
import {Provider} from 'react-redux';


// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Route component={App}  />
  </BrowserRouter>
  </Provider>,
                 document.getElementById('root')
                 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
