import React from 'react'
import ReactDOM               from 'react-dom';
import { render } from 'react-dom'
/*import descriptionReducer from './reducers/BookDescriptionReducer'
import BookDescriptionApp from './layouts/BookDescriptionApp'*/
import Root from './containers/Root.js'
import configureStore         from './store/configureStore';
import createBrowserHistory   from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';

const target  = document.getElementById('tutorial-app-root');
const history = createBrowserHistory();

export const store = configureStore(window.__INITIAL_STATE__);

syncReduxAndRouter(history, store);

const node = (
  <Root
    history={history}
    store={store}
  />
);

ReactDOM.render(node, target);