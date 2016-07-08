"use strict";

import React from 'react';
import ReactS3Uploader from 'react-s3-uploader';
import { Paper } from 'material-ui';


class ImgUploader extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFinished = this.uploadFinished.bind(this);

    this.state = {
      uploadDetails: null,
      uploadProgress: null,
      uploadError: null,
      articlePicUrl: props.articlePicUrl
    };
  }

  uploadFinished(uploadDetails) {
    // here will be more code in a moment
  }

  render () {
    return <div>S3 Image uploader placeholder</div>;
  }
}

ImgUploader.propTypes = { 
  updateImgUrl: React.PropTypes.func.isRequired 
};

export default ImgUploader;