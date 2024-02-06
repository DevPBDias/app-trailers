import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';
import LatestCard from '../components/LatestCard';
import { HomePageContainer } from '../styles/HomeStyles';

export function Home() {
  return (
    <HomePageContainer>
      <HeaderHome />
      <LatestCard />
      <Footer />
    </HomePageContainer>
  );
}
