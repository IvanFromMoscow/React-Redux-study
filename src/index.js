import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/root_reducer';
import thunk from 'redux-thunk';
import { spamFilter } from './redux/middleware/spam_filter';



const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
