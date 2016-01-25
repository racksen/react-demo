import React, {PropTypes} from 'react';
import AuthorApi from "../api/authorApi";
import AuthorList from "./AuthorList";

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
    let authors = (new AuthorApi()).getAll();
    this.setState({authors : authors});
  }

  render() {

    return (
      <div>
        <h1>Author</h1>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
}

Author.propTypes = {
};
