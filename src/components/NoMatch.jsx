import React, {PropTypes} from 'react';
import { Link } from 'react-router'

export default class NoMatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="span12">
            <div className="hero-unit center">
              <h1>Page Not Found <small><font face="Tahoma" color="red">Error 404</font></small></h1>
              <br />
              <p>The page you requested could not be found, either contact your webmaster or try again. Use your browsers <b>Back</b> button to navigate to the page you have prevously come from</p>
              <p><b>Or you could just press this neat little button:</b></p>
              <Link to="/" className="btn btn-large btn-info"><i className="icon-home icon-white"></i> Take Me Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NoMatch.propTypes = {
};
