import React, {PropTypes} from 'react';
import { Router, Route, Link } from 'react-router'

export default class AuthorList extends React.Component {
  constructor(props) {
    super(props);
  }
  createAuthorRow(author){
    //let href = '/author/' + author.ID;
    return (
      <tr key={author.ID}>
          <td>
            <Link to={`/author/${author.ID}`}>{author.ID}</Link>
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
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(this.createAuthorRow)}
        </tbody>
      </table>
    );
  }
}

AuthorList.propTypes = {
  authors : React.PropTypes.array.isRequired
};
