import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

//import AuthorApi from "../../api/authorApi.jsx";
import AuthorList from "./AuthorList.jsx";
import AuthorStore from "../../stores/authorStore";

export default class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors : AuthorStore.getAllAuthors()
    };
  }

  componentWillMount(){
    AuthorStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnMount(){
    AuthorStore.removeChangeListener(this._onChange.bind(this));

  }

  _onChange(){
    this.setState({authors :  AuthorStore.getAllAuthors()})
  }

  render() {

    return (
      <div>
        <h1>Author</h1>
        <Link to="author/manage" className='btn btn-primary pull-right'>Create</Link>
        <br/><br/>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

Author.propTypes = {
};
