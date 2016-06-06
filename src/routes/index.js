import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from '../layouts/CoreLayout';


/* auth views */
import LoginView                   	from '../layouts/LoginView';
import BookDescriptionApp           from '../layouts/BookDescriptionApp';
import DashboardView 				from '../views/DashboardView';
import RegisterView					from '../views/RegisterView.js';

export default (
  <Route component={CoreLayout} path='/'>
    <IndexRoute component={RegisterView} name='home' />
    <Route component={LoginView} path='login' name='login' />
    <Route component={DashboardView} path='dashboard' name='dashboard' />
    <Route component={RegisterView} path='register' name='register' />
  </Route>
);