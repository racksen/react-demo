import React, {PropTypes} from 'react';
import AuthorForm from "./AuthorForm.jsx";
import AuthorApi from "../../api/authorApi.jsx";

export default class AuthorManage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author : {ID: '', FNAME: '', LNAME: ''},
      action : 'Create'
    };
  }

  setAuthorState(event){
    var field= event.target.name;
    var value= event.target.value;
    this.state.author[field]=value;
    return this.setState({author : this.state.author});
  }

  saveAuthor(event){
    event.preventDefault();
    event.stopPropagation();
    AuthorApi.saveAuthor(this.state.author);
    console.log(AuthorApi.getAllAuthors());
  }

  render() {
    return (
      <div>

        <AuthorForm
          action = {this.state.action}
          author = {this.state.author}
          onChange={this.setAuthorState.bind(this)}
          onSave = {this.saveAuthor.bind(this)}
        />

    </div>
    );
  }
}

AuthorManage.propTypes = {
};
