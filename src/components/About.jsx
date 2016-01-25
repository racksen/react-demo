import React, {PropTypes} from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
          <p>This application uses the following technologies
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Flux</li>
              <li>Node</li>
              <li>Gulp</li>
              <li>Reactify</li>
              <li>Babelify</li>
              <li>Browserify</li>
            </ul>
          </p>
      </div>
    );
  }
}

About.propTypes = {
};
