import axios from 'axios';
import { api as apiConfig } from './config';


export const getPlayers = (next) => {
  axios.get(`${apiConfig.url}/players/`)
    .then((response) => {
      next(response);
    })
    .catch(function (error) {
      next({error: error});
    });
};

export const kickPlayer = (steamId, next) => {
  axios.get(`${apiConfig.url}/players/${steamId}/kick`)
    .then((response) => {
      next(response.data);
    })
    .catch(function (error) {
      next({error: error});
    });
};