import React, { Component } from 'react';
import _ from 'lodash';

import { getPlayers, kickPlayer} from '../../../api/player';

import PlayerList from '../../presentationals/Players/PlayersList';

const playersMocks = [
  { name: 'Shug0', client: { steamId: _.random(1, 99999999999)} },
  { name: 'Zoski', client: { steamId: _.random(1, 99999999999)} },
  { name: 'Scrutch', client: { steamId: _.random(1, 99999999999)} },
  { name: 'Daft Spirit', client: { steamId: _.random(1, 99999999999)} },
  { name: 'KevinDu33', client: { steamId: _.random(1, 99999999999)} },
];

class PlayerListContainer extends Component {
  constructor() {
    super();

    this.handleKickPlayer = this.handleKickPlayer.bind(this);
    this.handleGetPlayers = this.handleGetPlayers.bind(this);

    this.state = {
      players: playersMocks,
      playersLoaded: false,
    };
  }

  handleGetPlayers() {
    this.setState({
      playersLoaded: false
    });
    getPlayers((response) => {
      if (response.status === 200) {
        this.setState({
          players: response.data.length ? response.data : playersMocks,
          playersLoaded: true
        });
      }
    });
  }

  handleKickPlayer(steamId) {
    kickPlayer(steamId, (response) => {
      if (response.status === 200) {
        console.log('Player kicked');
      }
    });
  }

  componentDidMount() {
    this.handleGetPlayers();
  }


	render() {
    const { players, playersLoaded } = this.state;

		return (
			<PlayerList
        players={players}
        playersLoaded={playersLoaded}
        handleKickPlayer={this.handleKickPlayer}
        handleGetPlayers={this.handleGetPlayers}
      />
		);
	}
}

export default PlayerListContainer;
