import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'
let toastr = require('Toastr')
import AuthorActions from "../../actions/authorActions";

export default class AuthorList extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteAuthor(id,event){
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success("Author deleted");
  }

  createAuthorRow(author){
    //let href = '/author/' + author.ID;
    return (
      <tr key={author.ID}>
          <td>
            <a href="#" onClick={this.deleteAuthor.bind(this,author.ID)}>Delete</a>
          </td>
          <td>
            <Link to={`/author/manage/${author.ID}`}>{author.ID}</Link>
          </td>
          <td>{author.FNAME} {author.LNAME}</td>
      </tr>
    )
  }



  render() {
    return (
      <table className='table table-striped table-bordered table-hover table-condensed'>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(this.createAuthorRow.bind(this))}
        </tbody>
      </table>
    );
  }
}

AuthorList.propTypes = {
  authors : React.PropTypes.array.isRequired
};
