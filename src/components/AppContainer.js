import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// CSS
import './Styles/base.scss';

injectTapEventPlugin();

const AppContainer = ({ children, location }) => (
  <MuiThemeProvider>
    {React.cloneElement(children, {
      key: location.pathname
    })}
  </MuiThemeProvider>
);

export default AppContainer;
