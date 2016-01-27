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
              onChange = {this.props.onChange} />

            <TextInput
                name="LNAME"
                label="Last Name"
                value={this.props.author.LNAME}
                onChange = {this.props.onChange} />

              <button className="btn btn-primary" onClick={this.props.onSave}>Save</button>
            </form>
        </div>
    );
  }
}

AuthorForm.propTypes = {
};
