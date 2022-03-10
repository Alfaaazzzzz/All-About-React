import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import catsReducer from './store/cat-Slice'
import catSaga from './saga/catSaga';

const saga= createSagaMiddleware();
const store= configureStore({
  reducer:{
    cats:catsReducer
  },
  middleware:[saga]
})
saga.run(catSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


