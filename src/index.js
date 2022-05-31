import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(
  rootReducer,
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(thunk)),
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>, 
  document.getElementById('root')
);


