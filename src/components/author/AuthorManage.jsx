import React, {PropTypes} from 'react';
import { Router,browserHistory,hashHistory, Lifecycle } from 'react-router'
let toastr = require('Toastr')

import AuthorForm from "./AuthorForm.jsx";
//import AuthorApi from "../../api/authorApi.jsx";
import AuthorActions from "../../actions/authorActions";
import AuthorStore from "../../stores/authorStore";


var AuthorManage = React.createClass({

  getInitialState: function () {
    return {
      author : {ID: '', FNAME: '', LNAME: ''},
      action : 'Create',
      errors : {},
      dirty : false,
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentWillMount: function() {
      var authorId = this.props.params.id;
      if(authorId){
        this.setState({ author: AuthorStore.getAuthorById(authorId)});
      }
  },

  componentDidMount: function() {
    const { route } = this.props
    const { router } = this.context
    router.setRouteLeaveHook(route, this.routerWillLeave)
  },

  routerWillLeave : function(nextLocation) {
    if (this.state.dirty)
      return 'Your work is not saved! Are you sure you want to leave?'
  },


  authorFormIsValid : function(){
    let formIsValid= true;
    this.state.errors ={};

    if(this.state.author.FNAME.length<3){
      this.state.errors.FNAME = "First name must be at least 3 characters.";
      formIsValid=false
    }
    if(this.state.author.LNAME.length<3){
      this.state.errors.LNAME = "Last name must be at least 3 characters.";
      formIsValid=false
    }
    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  setAuthorState: function(event){
    this.state.dirty=true;
    this.setState({dirty:this.state.dirty});
    var field= event.target.name;
    var value= event.target.value;
    this.state.author[field]=value;
    return this.setState({author : this.state.author});
  },

  saveAuthor: function(event){
    event.preventDefault();
    if(!this.authorFormIsValid()){
      return;
    }

    if(this.state.author.ID){
      AuthorActions.updateAuthor(this.state.author);
    }
    else{
      AuthorActions.createAuthor(this.state.author);
    }
    toastr.success('Author Saved', 'Demo Admin');
    this.state.dirty=false;
    this.setState({dirty:this.state.dirty});
    this.context.router.push("/author");
  },

  render: function() {
    return (
      <div>

        <AuthorForm
          action = {this.state.action}
          author = {this.state.author}
          onChange={this.setAuthorState}
          onSave = {this.saveAuthor}
          errors = {this.state.errors}/>

    </div>
    );
  },

});

module.exports = AuthorManage;
