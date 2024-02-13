import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderMovie from '../components/HeaderMovie';
import MovieIdCard from '../components/MovieIdCard';
import { BtnContainer, MovieIdContainer } from '../styles/MovieIdStyles';
import { useContext, useEffect, useState } from 'react';
import { getMovieById } from '../services/movieService';
import { MovieContext } from '../context/MoviesContext';
import RelatedMovies from '../components/RelatedMovies';

function MovieId() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({})
  const [relatedMovies, setRelatedMovies] = useState<any>([])
  const { movies } = useContext(MovieContext)

  async function fetchMovieById(id: any) {
    const { data } = await getMovieById(id)
    setMovie(data);
  }

  async function getRelatedMovies(category: string) {
    const moviesInCategory = await movies.filter((elem: any) => elem.category === category)
    setRelatedMovies(moviesInCategory);
  }

  useEffect(() => {
    fetchMovieById(id)
    getRelatedMovies(movie.category)
  }, [])


  return (
    <MovieIdContainer>
      <HeaderMovie />
      <MovieIdCard data={movie} />
      <BtnContainer>
        <Link to={`${movie.linkTrailer}`}>
          Trailer
        </Link>
        <Link className='plat-btn' to={`${movie.linkTrailer}`}>
          {movie.platform}
        </Link>
      </BtnContainer>
      <RelatedMovies data={relatedMovies} />
      <Footer />
    </MovieIdContainer>
  );
}

export default MovieId;
