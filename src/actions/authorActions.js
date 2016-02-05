"user strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var AuthorApi = require('../api/authorApi');

var AuthorActions = {
  createAuthor : function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType : ActionTypes.CREATE_AUTHOR,
      author : newAuthor
    });
  },
  updateAuthor : function(author) {
    var updateAuthor = AuthorApi.saveAuthor(author);
    Dispatcher.dispatch({
      actionType : ActionTypes.UPDATE_AUTHOR,
      author : updateAuthor
    });
  },
  deleteAuthor : function(id) {
    AuthorApi.deleteAuthor(id);
    Dispatcher.dispatch({
      actionType : ActionTypes.DELETE_AUTHOR,
      ID : id
    });
  },
};

module.exports = AuthorActions;
