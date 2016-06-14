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
        <span>Links: <Link to='/login'>Login</Link> | <Link to='/'>Home Page</Link> | <Link to='/register'>Register</Link></span>
          <br/>
          {this.props.children}
      </div>
    );
  }
}

export default CoreLayout;