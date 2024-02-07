import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LatestCard from '../components/LatestCard';
import PlatformCardMovies from '../components/PlatformCardMovies';

const SeriesContainer = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
`;

function Series() {
  return (
    <SeriesContainer>
      <HeaderTitle titlePage="Séries" />
      <LatestCard />
      <PlatformCardMovies />
      <PlatformCardMovies />
      <Footer />
    </SeriesContainer>
  );
}

export default Series;
