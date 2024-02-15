import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMovie from '../components/HeaderMovie';
import MovieIdCard from '../components/MovieIdCard';
import { BtnContainer, MovieIdContainer } from '../styles/MovieIdStyles';
import { useEffect, useState } from 'react';
import { getMovieById } from '../services/movieService';
import RelatedMovies from '../components/RelatedMovies';

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
      <HeaderMovie movieId={id} />
      <MovieIdCard data={movie} />
      <BtnContainer>
        <Link to={`${movie.linkTrailer}`}>
          Trailer
        </Link>
        <Link className='plat-btn' to={`${movie.linkTrailer}`}>
          {movie.platform}
        </Link>
      </BtnContainer>
      <RelatedMovies data={movie.type} />
      <Footer />
    </MovieIdContainer>
  );
}

export default MovieId;
