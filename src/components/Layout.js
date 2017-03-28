'use strict';

import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class Layout extends React.Component {

  render() {
    return (
		<MuiThemeProvider>
        	<div className="app-content">{this.props.children}</div>
        </MuiThemeProvider>
    );
  }
}
