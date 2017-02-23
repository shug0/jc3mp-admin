import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import './PlayersList.scss';

class PlayersList extends Component {

  constructor() {
    super();
    this.handleClickKickPlayer = this.handleClickKickPlayer.bind(this);
  }

  handleClickKickPlayer(player) {
    this.props.kickPlayer(player.client.steamId);
  }

  render() {

    const { players, playersLoaded } = this.props;
    const hasPlayer = players.length > 0;

    const playersListNode = players.map((player, index) => (
      <ListItem
        primaryText={player.name}
        key={index}
        rightIconButton={
          <FlatButton label="Kick" secondary={true} onClick={() => this.handleClickKickPlayer(player)}/>
        }
      />
    ));

    return (
      <Paper className='PlayersList wrapper'>
        <h2>Players :</h2>
        {!playersLoaded && <CircularProgress size={60} thickness={7} /> }

        {playersLoaded && hasPlayer  &&
          <List>
            {playersListNode}
          </List>
        }

        {playersLoaded && !hasPlayer &&
          <div>No players found...</div>
        }
      </Paper>
    );
  }
};

export default PlayersList;
