"use strict"; 
  
import React from 'react';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';

import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';

import ActionHome from 'material-ui/lib/svg-icons/action/home';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from '../actions/article.js';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});

class MyComponent extends React.Component {
 render() {
    console.info(this.props);
    return (
      <div>Hello world<RaisedButton label="Default" /></div>
    );
  }
}


const muiCoreLayout = themeDecorator(getMuiTheme(null, { userAgent: 'all' }))(MyComponent);

export default connect(mapStateToProps, mapDispatchToProps)(muiCoreLayout);