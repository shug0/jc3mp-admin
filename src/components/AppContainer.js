import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueA400,
  blue500,
  grey400,
  pink600,
  grey200,
  grey500,
} from 'material-ui/styles/colors';

import Header from './presentationals/Common/Header';

// CSS
import './Styles/base.scss';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueA400,
    primary2Color: blue500,
    primary3Color: grey400,
    accent1Color: pink600,
    accent2Color: grey200,
    accent3Color: grey500,
  }
});

const AppContainer = ({ children, location }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <main>
      <Header />
      {children}
    </main>
  </MuiThemeProvider>
);

injectTapEventPlugin();

export default AppContainer;
