import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
// binding layer
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'


const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase}))
  
    )
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
