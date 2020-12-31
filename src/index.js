import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirebaseInstance,
} from "redux-firestore";
import {
  reactReduxFirebase,
  getFirebase,
  ReactReuxFirebaseProivider,
} from "react-redux-firebase";
import fbConfig from "./config";

// const store = createStore(rootReducer,
//   compose(
//   applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
//   reactReduxFirebase(config),
//   reduxFirestore(config),
//     )
//   );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrFProps = {
  fbConfig,
  config: {},
  dispatch: store.dispatch,
  createFirebaseInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
