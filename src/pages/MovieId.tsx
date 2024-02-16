import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMovie from '../components/HeaderMovie';
import MovieIdCard from '../components/MovieIdCard';
import { BtnContainer, MovieIdContainer } from '../styles/MovieIdStyles';
import { useContext, useEffect, useState } from 'react';
import { getMovieById } from '../services/movieService';
import RelatedMovies from '../components/RelatedMovies';
import { MovieContext } from '../context/MoviesContext';

function MovieId() {
  const { movies } = useContext(MovieContext)
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({})
  const [relatedMovies, setRelatedMovies] = useState<any>([])

  async function fetchMovieById(id: any) {
    const { data } = await getMovieById(id)
    setMovie(data);
  }

  async function getRelatedMovies() {
    const moviesInCategory = movies.filter((elem: any) => elem.type === movie.type)
    setRelatedMovies(moviesInCategory);
  }

  
  useEffect(() => {
    fetchMovieById(id)
    getRelatedMovies()
  }, [])


  return (
    <MovieIdContainer>
      <HeaderMovie data={movie} />
      <MovieIdCard data={movie} />
      <BtnContainer>
        <Link to={`${movie.linkTrailer}`}>
          Trailer
        </Link>
        <Link className='plat-btn' to={`${movie.linkTrailer}`}>
          {movie.platform}
        </Link>
      </BtnContainer>
      <RelatedMovies relatedData={relatedMovies} />
      <Footer />
    </MovieIdContainer>
  );
}

export default MovieId;
