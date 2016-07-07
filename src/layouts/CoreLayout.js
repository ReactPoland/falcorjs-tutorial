"use strict"; 
  
import React from 'react';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import RaisedButton from 'material-ui/lib/raised-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

class MyComponent extends React.Component {
 render() {
    return (
      <div>Hello world<RaisedButton label="Default" /></div>
    );
  }
}

export default themeDecorator(getMuiTheme(null, { userAgent: 'all' }))(MyComponent);