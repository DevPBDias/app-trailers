import Footer from '../components/Footer';
import HeaderMovie from '../components/HeaderMovie';
import MovieIdCard from '../components/MovieIdCard';
import PlatformCardMovies from '../components/PlatformCardMovies';
import { BtnContainer, MovieIdContainer } from '../styles/MovieIdStyles';

function MovieId() {
  return (
    <MovieIdContainer>
      <HeaderMovie />
      <MovieIdCard />
      <BtnContainer>
        <button type="button">
          Trailer
        </button>
        <button type="button">
          Trailer
        </button>
      </BtnContainer>
      <PlatformCardMovies />
      <Footer />
    </MovieIdContainer>
  );
}

export default MovieId;
