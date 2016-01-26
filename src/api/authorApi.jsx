var authors = require('./mockData.jsx').authors;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function() {
	//return author.FNAME.toLowerCase() + '-' + author.LNAME.toLowerCase();
  return authors.length + 1
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var AuthorApi = {
	getAllAuthors: function() {
		return _clone(authors);
	},

	getAuthorById: function(ID) {
		var author = _.find(authors, {ID: ID});
		return _clone(author);
	},

	saveAuthor: function(author) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the author to the DB via AJAX call...');

		if (author.ID) {
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {ID: author.ID}));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			//Just simulating creation here.
			//The server would generate IDs for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			author.ID = _generateId();
			authors.push(author);
		}

		return _clone(author);
	},

	deleteAuthor: function(ID) {
		console.log('Pretend this just deleted the author from the DB via an AJAX call...');
		_.remove(authors, { ID: ID});
	}
};

module.exports = AuthorApi;
