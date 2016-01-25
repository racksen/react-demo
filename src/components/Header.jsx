import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="navbar-header">
            <a className="navbar-brand" href="#"><img src='images/logo.png' width="180px" height="50px"/></a>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="author">Author</Link>
              </li>
            </ul>
            <form className="form-inline pull-xs-right">
              <input className="form-control" type="text" placeholder="Search" />
              <button className="btn btn-success-outline" type="submit">Search</button>
            </form>
          </div>
        </nav>
    );
  }
}

Header.propTypes = {
};
