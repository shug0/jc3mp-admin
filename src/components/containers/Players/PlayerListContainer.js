import React, { Component } from 'react';
import axios from 'axios';

import { api as apiConfig } from '../../../constants/api';

import PlayerList from '../../presentationals/Players/PlayersList';

class PlayerListContainer extends Component {
  constructor() {
    super();

    this.kickPlayer = this.kickPlayer.bind(this);

    this.state = {
      players: [],
      playersLoaded: false,
    };
  }

  componentDidMount() {
    axios.get(`${apiConfig.url}/players/`)
      .then((response) => {
        this.setState({
          players: response.data,
          playersLoaded: true
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  kickPlayer(steamId) {
    axios.get(`${apiConfig.url}/players/${steamId}/kick`)
      .then((response) => {
        this.setState({
          players: response.data,
          playersLoaded: true
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

	render() {
    const { players, playersLoaded } = this.state;

		return (
			<PlayerList
        players={players}
        playersLoaded={playersLoaded}
        kickPlayer={this.kickPlayer}
      />
		);
	}
}

export default PlayerListContainer;
