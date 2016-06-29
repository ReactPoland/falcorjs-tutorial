"use strict";
import React from 'react';
import falcorModel from '../falcorModel.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Snackbar } from 'material-ui';
import { RegisterForm } from '../components/RegisterForm.js';

const mapStateToProps = (state) => ({ 
  ...state 
});

const mapDispatchToProps = (dispatch) => ({
});

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    
    let articlesJSX = [];
    this.props.article.forEach((articleDetails, articleKey) => {
      let currentArticleJSX = (
        <Link to={`/edit-article/${articleDetails['_id']}`}>
          <ListItem
            key={articleKey}
            leftAvatar={<img src="/static/placeholder.png" width="50" height="50" />}
            primaryText={articleDetails.articleTitle}
            secondaryText={articleDetails.articleContent}
          />
        </Link>
      );

      articlesJSX.push(currentArticleJSX);
    });

    return (
      <div style={{height: '100%', width: '75%', margin: 'auto'}}>
        <Link to='/add-article'>
          <RaisedButton 
            label="Create an article" 
            secondary={true} 
            style={{margin: '20px 20px 20px 20px'}} />
        </Link>

        <List>
          {articlesJSX}
        </List>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);