import React from 'react';
import { connect } from 'react-redux';
import falcorModel from '../falcorModel.js';
import { bindActionCreators } from 'redux';
import descriptionActions from '../actions/descriptions.js';

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
    let descriptionsLength = await falcorModel.
      getValue("descriptions.length").
      then(function(length) {  
        return length;
      });

    let descriptions = await falcorModel.
      get(['descriptions', {from: 0, to: descriptionsLength-1}, ['id','descriptionTitle', 'descriptionContent']]). 
      then(function(descriptionsResponse) {  
        return descriptionsResponse.json.descriptions;
      });
      this.props.descriptionActions.descriptionsList(descriptions);
  }
  render () {
    
    /*console.log("reducer is stored in this.props : ", this.props);*/
    console.log("reducer is stored in this.props.descriptionReducer : ", this.props.descriptionReducer);
    
    let descriptionsJSX = [];
    for(let descriptionKey in this.props.descriptionReducer) {
        let descriptionDetails = this.props.descriptionReducer[descriptionKey];
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