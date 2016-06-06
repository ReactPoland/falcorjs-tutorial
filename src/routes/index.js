import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from '../layouts/CoreLayout';


/* auth views */
import LoginView                   	from '../layouts/LoginView';
import BookDescriptionApp           from '../layouts/BookDescriptionApp';
import MainView 					from '../views/MainView';
import ShowRegistration				from '../views/ShowRegistration.js';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={ShowRegistration} name='home' />
    <Route component={LoginView} path='login' name='login' />
    <Route component={MainView} path='main-view' name='main-view' />
    <Route component={ShowRegistration} path='register' name='register' />
  </Route>
);