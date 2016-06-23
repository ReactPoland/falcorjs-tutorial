"use strict";

import React from 'react';
import { connect } from 'react-redux';
import WYSWIGeditor from '../../components/articles/WYSWIGeditor.js';
import { stateToHTML } from 'draft-js-export-html';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({

});

class AddArticleView extends React.Component {
  constructor(props) {
    super(props);
    this._onDraftJSChange = this._onDraftJSChange.bind(this);

    this.state = {
      contentJSON: {},
      htmlContent: ''
    };
  }
  _onDraftJSChange(contentJSON, contentState) {
    let htmlContent = stateToHTML(contentState);
    this.setState({contentJSON, htmlContent});
  }

   render () {
    return (
      <div style={{height: '100%', width: '75%', margin: 'auto'}}>
        <h1>Add Article</h1>
        <WYSWIGeditor
          initialValue=''
          title="Create an article"
          onChangeTextJSON={this._onDraftJSChange} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleView);