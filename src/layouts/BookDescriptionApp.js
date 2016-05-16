import React from 'react';
import { connect } from 'react-redux';
import falcorModel from '../falcorModel.js';
import { bindActionCreators } from 'redux';
import descriptionActions from '../actions/descriptions.js';

/*Almost on everystep the UI part of our app is identical.
 The above screenshot is taken on the publishing app which:

1) Fetch data from DB with use of Falcor-Express && Falcor-Router 2)
 The data moves from backend (source is MongoDB)
  to frontend we populate Redux's src/reducers/article.js state tree 3)
   We render the DOM elements based on our single state tree.

*/

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  descriptionActions: bindActionCreators(descriptionActions, dispatch)
});

class BookDescriptionApp extends React.Component {
  constructor(props) {
    super(props);
  }
   componentWillMount() {
    this._fetch();
  }

  async _fetch() {
    let articlesLength = await falcorModel.
      getValue("articles.length").
      then(function(length) {  
        return length;
      });

    let articles = await falcorModel.
      get(['articles', {from: 0, to: articlesLength-1}, ['id','descriptionTitle', 'descriptionContent']]). 
      then(function(articlesResponse) {  
        return articlesResponse.json.articles;
      });
      console.log("articles is: ", articles);
      this.props.descriptionActions.descriptionsList(articles);
  }
  render () {
    
    console.log("reducer is stored in this.props----> ", this.props);
    let descriptionsJSX = [];
    for(let descriptionKey in this.props) {
        let descriptionDetails = this.props[descriptionKey];
        let currentDescriptionJSX = (
            <div key={descriptionKey}>
                <h2>{descriptionDetails.descriptionTitle}</h2>
                <h3>{descriptionDetails.descriptionContent}</h3>
            </div>);
        descriptionsJSX.push(currentDescriptionJSX);
    }
    return (
      <div>
          <h1>Our description app</h1>
          {descriptionsJSX}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDescriptionApp);