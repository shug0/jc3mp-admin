import React, { Component } from 'react';
import _ from 'lodash';

import { getPlayers, kickPlayer} from '../../../api/player';

import PlayerList from '../../presentationals/Players/PlayersList';

class PlayerListContainer extends Component {
  constructor() {
    super();

    this.handleKickPlayer = this.handleKickPlayer.bind(this);
    this.handleGetPlayers = this.handleGetPlayers.bind(this);
    this.handleSearchPlayer = this.handleSearchPlayer.bind(this);

    this.state = {
      players: [],
      filteredPlayers: [],
      playersLoaded: false,
    };
  }

  handleSearchPlayer(input) {
    if(input.length === 0) {
      this.handleGetPlayers();
    }
    else {
      const newFilteredPlayers =
      this.state.players.filter(player => _.lowerCase(player.name).includes(_.lowerCase(input)));
      this.setState({
        filteredPlayers: newFilteredPlayers
      })
    }
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
            filteredPlayers: response.data,
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
          this.handleGetPlayers();
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
    const { filteredPlayers, playersLoaded } = this.state;

		return (
			<PlayerList
        players={filteredPlayers}
        playersLoaded={playersLoaded}
        handleKickPlayer={this.handleKickPlayer}
        handleGetPlayers={this.handleGetPlayers}
        handleSearchPlayer={this.handleSearchPlayer}
      />
		);
	}
}

export default PlayerListContainer;
