import React, {PropTypes} from 'react';
import Header from "./common/Header.jsx";
// import Home from "./Home";
// import About from "./About";
// import Author from "./Author";


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
/*
  render() {
    let Child;
    switch (this.props.route) {
      case 'about':
        Child = About
        break;
      case 'author':
        Child = Author
        break;
      default: Child = Home

    }

    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
*/

}

App.propTypes = {
};
