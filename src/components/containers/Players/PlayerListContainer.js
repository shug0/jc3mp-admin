import React, { Component } from 'react';
import axios from 'axios';

import PlayerList from '../../presentationals/Players/PlayersList';

class PlayerListContainer extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:4204/players/')
      .then((response) => {
        this.setState({players: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

	render() {
    const { players } = this.state;

		return (
			<PlayerList players={players} />
		);
	}
}

export default PlayerListContainer;
