import React from 'react';

import {List, ListItem} from 'material-ui/List';

import './PlayersList.scss';

const PlayersList = (props) => {
	const { players } = props;

	const playersListNode = players.map((player) => (
		<ListItem primaryText={player.name} />
	));

	return (
		<article className='PlayersList'>
      {players &&
        <List>
          {playersListNode}
        </List>
      }
      {!players &&
        <div>No players found...</div>
      }
		</article>
	);
};

export default PlayersList;
