import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
//import reducer from './reducers/merch-list-reducer';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

