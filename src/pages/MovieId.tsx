import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMovie from '../components/HeaderMovie';
import MovieIdCard from '../components/MovieIdCard';
import PlatformCardMovies from '../components/PlatformCardMovies';
import { BtnContainer, MovieIdContainer } from '../styles/MovieIdStyles';
import { useEffect, useState } from 'react';
import { getMovieById } from '../services/movieService';

function MovieId() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({})

  async function fetchMovieById(id: any) {
    const { data } = await getMovieById(id)
    setMovie(data);
  }

  useEffect(() => {
    fetchMovieById(id)
  }, [])
  

  return (
    <MovieIdContainer>
      <HeaderMovie />
      <MovieIdCard data={movie}/>
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
