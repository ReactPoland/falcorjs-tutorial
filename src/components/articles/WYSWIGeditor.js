import React from 'react';
import {
  Editor, 
  EditorState, 
  ContentState, 
  RichUtils, 
  convertToRaw,
  convertFromRaw
} from 'draft-js';

export default class  WYSWIGeditor extends React.Component {
  constructor(props) {
    super(props);

    let initialEditorFromProps = EditorState.createWithContent(ContentState.createFromText(''));

    this.state = {
      editorState: initialEditorFromProps
    };

    this.onChange = (editorState) => { 
      var contentState = editorState.getCurrentContent();

      let contentJSON = convertToRaw(contentState);
      props.onChangeTextJSON(contentJSON, contentState);
      this.setState({editorState}) 
    };
    this.focus = () => this.refs['WYSWIGeditor'].focus();
	this.handleKeyCommand = (command) => this._handleKeyCommand(command);
  }
  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

   render() {
    const { editorState } = this.state;
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();

    return (
      <div>
        <h4>{this.props.title}</h4>
        <div className="RichEditor-root">
          <div className={className} onClick={this.focus}>
            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              ref='refWYSWIGeditor' />
          </div>
        </div>
      </div>
    );
  }
}

export default WYSWIGeditor;