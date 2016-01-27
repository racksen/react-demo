import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory,Router, Route, IndexRoute, Redirect} from 'react-router'
import App from "./components/App.jsx";
import NoMatch from "./components/NoMatch.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Author from "./components/author/Author.jsx";
import AuthorManage from "./components/author/AuthorManage.jsx";

function requireAuth(nextState, replace) {
  console.log("%s",  nextState.location.pathname);
  // if (!auth.loggedIn()) {
  //   replace({
  //     pathname: '/login',
  //     state: { nextPathname: nextState.location.pathname }
  //   })
  //<Router history={browserHistory}>
  // }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Redirect from="about1" to='about' />
      <IndexRoute component={Home} />
      <Route path="about" component={About}  />
      <Route path="author" component={Author} onEnter={requireAuth} />
      <Route path="author/create" component={AuthorManage}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
),document.getElementById('app'));
