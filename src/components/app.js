import React, { Component } from 'react';
import { Link } from 'react-router';

import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
});

const styles = {
  title: {
    cursor: 'pointer',
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title={<Link style={styles.link} to="/" >Simple Blog</Link>}
            iconElementRight={
              <FlatButton label="New post" containerElement={<Link to="/posts/new" />} />
            }
            iconElementLeft={<span></span>} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
