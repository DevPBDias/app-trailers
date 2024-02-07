import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LatestCard from '../components/LatestCard';
import PlatformCardMovies from '../components/PlatformCardMovies';

const AnimesContainer = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
`;

function Animes() {
  return (
    <AnimesContainer>
      <HeaderTitle titlePage="Animes" />
      <LatestCard />
      <PlatformCardMovies />
      <PlatformCardMovies />
      <Footer />
    </AnimesContainer>
  );
}

export default Animes;
