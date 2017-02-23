import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';

const Header = () => (
  <AppBar
    style={{paddingRight: 0}}
    className="Header"
    title={<Link to="/">JC3 MP Admin</Link>}
    children={
      <nav>
        <Link to="players">Players</Link>
      </nav>
    }
  />
);

export default Header;
