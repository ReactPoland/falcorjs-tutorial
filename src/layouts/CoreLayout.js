"use strict"; 
  
import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

const muiTheme = getMuiTheme({userAgent: 'all'});

class Main extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default themeDecorator(muiTheme)(Main)