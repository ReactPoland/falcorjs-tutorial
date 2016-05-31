import React                        from 'react';
import { Route, IndexRoute }        from 'react-router';

/* wrappers */
import CoreLayout                   from '../layouts/CoreLayout';


/* auth views */
import LoginView                   from '../layouts/LoginView';
import BookDescriptionApp                   from '../layouts/BookDescriptionApp';

export default (
  <Route component={CoreLayout} path='/' >
    <Route component={LoginView} name='login' path='/login'/>
    <Route component={BookDescriptionApp} name='description' path='/description' />
    
  </Route>
);