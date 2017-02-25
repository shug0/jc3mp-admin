import axios from 'axios';
import { api as apiConfig } from './config';

export const getPlayers = () => {
  return axios.get(`${apiConfig.url}/players/`);
};

export const kickPlayer = (steamId) => {
  return axios.get(`${apiConfig.url}/players/${steamId}/kick`);
};