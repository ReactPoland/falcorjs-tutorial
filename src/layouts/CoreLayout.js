import React from 'react';
import { Link } from 'react-router';

class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <span>Links: <Link to='/'>Home page</Link> | 
        <Link to='/login'>Login</Link></span> | 
        <Link to='/description'>Description App</Link>
          <br/>
          {this.props.children}
      </div>
    );
  }
}

export default CoreLayout;