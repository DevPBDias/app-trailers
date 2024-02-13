import { useContext } from 'react';
import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';
import LatestCard from '../components/LatestCard';
import PlatformCardMovies from '../components/PlatformCardMovies';
import { HomePageContainer } from '../styles/HomeStyles';
import { MovieContext } from '../context/MoviesContext';

export function Home() {
  const { newMovies } = useContext(MovieContext)

  return (
    <HomePageContainer>
      <HeaderHome />
      <LatestCard data={newMovies} />
      <PlatformCardMovies />
      <Footer />
    </HomePageContainer>
  );
}
