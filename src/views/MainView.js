"use strict";

import React from 'react';
import Falcor from 'falcor';
import falcorModel from '../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({

});

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
          <h1>Main view - loggedin!</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);