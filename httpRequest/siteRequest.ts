import axios from 'axios';
import { ISite } from '../interfaces/ISite';

const siteAxios = axios.create({
  baseURL: 'https://smart-import-server.herokuapp.com/api/v1/site'
});

export const getAllSite = async () => {
  const { data } = await siteAxios.get('/');
  return data.data.data as [ISite];
};

export const createSite = async (siteData: ISite) => {
  const { data } = await siteAxios.post('/', siteData);
  return data.data.data as ISite;
};
