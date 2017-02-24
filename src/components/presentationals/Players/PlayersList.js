import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import IconButton from 'material-ui/IconButton';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import './PlayersList.scss';

class PlayersList extends Component {

  constructor() {
    super();
    this.handleClickKickPlayer = this.handleClickKickPlayer.bind(this);
    this.handleClickGetPlayers = this.handleClickGetPlayers.bind(this);
  }

  handleClickGetPlayers() {
    this.props.handleGetPlayers();
  }

  handleClickKickPlayer(player) {
    this.props.handleKickPlayer(player.client.steamId);
  }

  render() {

    const { players, playersLoaded } = this.props;
    const hasPlayer = players.length > 0;

    const playersListNode = players.map((player, index) => (
      <TableRow key={index} selectable={false}>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{player.name}</TableRowColumn>
        <TableRowColumn>{player.client.steamId}</TableRowColumn>
        <TableRowColumn><FlatButton label="Kick" secondary={true} onClick={() => this.handleClickKickPlayer(player)}/></TableRowColumn>
      </TableRow>
    ));

    return (
      <Paper className='PlayersList wrapper'>
        <IconButton
          tooltip={"Refresh the players"}
          className="refreshIcon"
          onClick={this.handleClickGetPlayers}
          children={<RefreshIcon />}
        />

        <h2>Players :</h2>
        {!playersLoaded && <CircularProgress size={60} thickness={7} /> }

        {playersLoaded && hasPlayer  &&
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Steam ID</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {playersListNode}
            </TableBody>
          </Table>
        }

        {playersLoaded && !hasPlayer &&
          <div>No players found...</div>
        }
      </Paper>
    );
  }
};

export default PlayersList;
