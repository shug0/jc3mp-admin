import React, { Component } from 'react';

import { getPlayers, kickPlayer} from '../../../api/player';

import PlayerList from '../../presentationals/Players/PlayersList';

class PlayerListContainer extends Component {
  constructor() {
    super();

    this.handleKickPlayer = this.handleKickPlayer.bind(this);
    this.handleGetPlayers = this.handleGetPlayers.bind(this);

    this.state = {
      players: [],
      playersLoaded: false,
    };
  }

  handleGetPlayers() {
    this.setState({
      playersLoaded: false
    });

    getPlayers()
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            players: response.data,
            playersLoaded: true
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleKickPlayer(steamId) {
    kickPlayer(steamId)
      .then((response) => {
        if (response.status === 200) {
          console.log('Player kicked');
        }
      })
      .catch(function (error) {
        console.log(error);
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
