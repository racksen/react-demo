import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

import AuthorApi from "../../api/authorApi.jsx";
import AuthorList from "./AuthorList.jsx";

export default class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  getInitialState(){
    return {
      authors:[]
    };
  }

  componentWillMount() {
    let authors = AuthorApi.getAllAuthors();
    this.setState({authors : authors});
  }

  render() {

    return (
      <div>
        <h1>Author</h1>
        <Link to="author/create" className='btn btn-primary pull-right'>Create</Link>
        <br/><br/>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

Author.propTypes = {
};
