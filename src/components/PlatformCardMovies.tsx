import { useContext } from 'react';
import { Container } from '../styles/PlatformCardMoviesStyles';
import PlatformCard from './PlatformCard';
import { MovieContext } from '../context/MoviesContext';

function PlatformCardMovies() {
  const { hbo, disney, netflix, crunchy } = useContext(MovieContext)

  return (
    <Container>
      <PlatformCard data={disney} name='Disney+' />
      <PlatformCard data={hbo} name='HBO Max' />
      <PlatformCard data={netflix} name='Netflix' />
      <PlatformCard data={crunchy} name='Crunchyroll' />
    </Container>
  );
}

export default PlatformCardMovies;
