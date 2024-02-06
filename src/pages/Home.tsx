import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';
import LatestCard from '../components/LatestCard';
import PlatformCardMovies from '../components/PlatformCardMovies';
import { HomePageContainer } from '../styles/HomeStyles';

export function Home() {
  return (
    <HomePageContainer>
      <HeaderHome />
      <LatestCard />
      <PlatformCardMovies />
      <Footer />
    </HomePageContainer>
  );
}
