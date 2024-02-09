import axios from 'axios';

const baseURL = 'http://localhost:3004';

type IMovieData = {
  name: string,
  year: string,
  company: string,
  linkTrailer: string,
  actors: string,
  image: string,
  category: string,
  type: string,
  director: string,
  platform: string,
};

export function addMovie(data: IMovieData) {
  const response = axios.post(`${baseURL}/movie`, data);
  return response;
}
