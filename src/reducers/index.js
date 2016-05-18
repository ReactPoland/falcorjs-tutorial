import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import descriptionReducer  from './BookDescriptionReducer.js';

export default combineReducers({
  routing: routeReducer,
  descriptionReducer
});