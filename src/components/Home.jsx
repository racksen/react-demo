import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>React, React Router and Flux for ultra-responsive web apps...</p>
          <Link className="btn btn-primary btnddlg" to="about">Learn More</Link>
      </div>
    );
  }
}

Home.propTypes = {
};
