import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { blueA400 } from 'material-ui/styles/colors';


import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


import './PlayersList.scss';

class PlayersList extends Component {

  constructor() {
    super();
    this.handleClickKickPlayer = this.handleClickKickPlayer.bind(this);
    this.handleClickGetPlayers = this.handleClickGetPlayers.bind(this);
    this.handleChangeSearchPlayer = this.handleChangeSearchPlayer.bind(this);
  }

  handleClickGetPlayers() {
    this.props.handleGetPlayers();
  }

  handleChangeSearchPlayer(input) {
    this.props.handleSearchPlayer(input.target.value);
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
        <TableRowColumn>{player.client.ping}</TableRowColumn>
        <TableRowColumn><FlatButton label="Kick" secondary={true} onClick={() => this.handleClickKickPlayer(player)}/></TableRowColumn>
      </TableRow>
    ));

    return (
      <Paper className='PlayersList wrapper'>
        <header style={{ backgroundColor: blueA400 }}>
          <h2>Players :</h2>
          <div className="actions">
            <SearchIcon color="white" style={{marginRight: '-1.2rem'}}/>
            <TextField
              className="searchInput"
              hintStyle={{
                color: 'rgba(255,255,255,0.4)',
                paddingLeft: '1.5rem'
              }}
              inputStyle={{
                color: 'rgba(255,255,255,0.8)',
                paddingLeft: '1.5rem'
              }}
              hintText="Search a player"
              onChange={this.handleChangeSearchPlayer}
            />
            <IconButton
              className="refreshIcon"
              tooltip={"Refresh the players"}
              onClick={this.handleClickGetPlayers}
              children={<RefreshIcon color="white" />}
            />
          </div>
        </header>

        {!playersLoaded && <CircularProgress size={60} thickness={7} /> }

        {playersLoaded && hasPlayer  &&
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Steam ID</TableHeaderColumn>
                <TableHeaderColumn>Ping</TableHeaderColumn>
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
