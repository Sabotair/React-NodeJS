import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './store/reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

