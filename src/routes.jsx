import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory,hashHistory,Router, Route, IndexRoute, Redirect} from 'react-router'
import App from "./components/App.jsx";
import NoMatch from "./components/NoMatch.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Author from "./components/author/Author.jsx";
import AuthorManage from "./components/author/AuthorManage.jsx";
import InitializeActions from "./actions/initializeActions";

InitializeActions.initApp();

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Redirect from="about1" to='about' />
      <IndexRoute component={Home} />
      <Route path="about" component={About}  />
      <Route path="author" component={Author} />
      <Route path="author/manage" component={AuthorManage}/>
      <Route path="author/manage/:id" component={AuthorManage}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
),document.getElementById('app'));
