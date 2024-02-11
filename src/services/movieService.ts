import axios from 'axios';
import { IMovieData } from '../types';

const baseURL = 'http://localhost:3004';


export function addMovie(data: IMovieData) {
  const response = axios.post(`${baseURL}/movie`, data);
  return response;
}

export function getMoviesData() {
  const response = axios.get(`${baseURL}/movie`);
  return response;
}

export function getMovieById(id: any) {
  const response = axios.get(`${baseURL}/movie/${id}`);
  return response;
}
