import React from 'react';
import { browserHistory,Router, Route, IndexRoute, Redirect} from 'react-router'
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Author from "./components/Author.jsx";
import NoMatch from "./components/NoMatch.jsx";

function requireAuth(nextState, replace) {
  console.log("%s",  nextState.location.pathname);
  // if (!auth.loggedIn()) {
  //   replace({
  //     pathname: '/login',
  //     state: { nextPathname: nextState.location.pathname }
  //   })
  // }
}

React.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Redirect from="about1" to='about' />
      <Route path="about" component={About}  />
      <Route path="author" component={Author} onEnter={requireAuth} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
),document.getElementById('app'));
