import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput.jsx";

export default class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
          <h2>{this.props.action} Author</h2>
          <form>
            <TextInput
              name="FNAME"
              label="First Name"
              value={this.props.author.FNAME}
              onChange = {this.props.onChange}
              error = {this.props.errors.FNAME}/>

            <TextInput
                name="LNAME"
                label="Last Name"
                value={this.props.author.LNAME}
                onChange = {this.props.onChange}
                error = {this.props.errors.LNAME}/>

              <button className="btn btn-primary" onClick={this.props.onSave}>Save</button>
            </form>
        </div>
    );
  }
}

AuthorForm.propTypes = {
  author : React.PropTypes.object.isRequired,
  onChange : React.PropTypes.func.isRequired,
  onSave : React.PropTypes.func.isRequired,
  errors : React.PropTypes.object
};
