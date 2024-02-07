import movie1 from '../assets/movie1.png';
import movie2 from '../assets/movie2.png';
import movie3 from '../assets/movie3.png';
import movie4 from '../assets/movie4.png';
import movie5 from '../assets/movie5.png';
import movie6 from '../assets/movie6.png';

type IMovieData = {
  platform: string,
  movies: string[],
};

type IData = {
  name: string,
  year: string,
  company: string,
  linkTrailer: string,
  actors: string,
  image: string,
  type: string,
  director: string,
  platform: string,
};

export const movieData: IMovieData[] = [
  {
    platform: 'Disney+',
    movies: [movie1, movie2, movie3],
  },
  {
    platform: 'HBO Max',
    movies: [movie4, movie5, movie6],
  },
];

export const data: IData[] = [
  {
    name: 'Guardiões da galáxia vol.3',
    company: 'Marvel Studios',
    linkTrailer: 'https://www.youtube.com/watch?v=5UVaA6SGRZA&ab_channel=MarvelBrasil',
    platform: 'Disney+',
    actors: 'Chris Pratt',
    image: movie1,
    year: '2022',
    type: 'Ação',
    director: 'James Gunn',

  },
  {
    name: 'Gran Turismo',
    year: '2023',
    company: 'Columbia Pictures',
    type: 'Ação',
    director: 'Joe Devon',
    actors: 'John Goat',
    platform: 'HBO Max',
    image: movie5,
    linkTrailer: 'https://www.youtube.com/watch?v=6mQekraNWZM&ab_channel=SonyPicturesBrasil',
  },
];
