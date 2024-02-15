import { useNavigate } from 'react-router-dom';
import goBackArrow from '../assets/goBack.png';
import {
  GoBack,
  HeaderMovieContainer, IconContainer
} from '../styles/HeaderStyles';
import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';

function HeaderMovie({ movieId }: any) {
  const { movies, updatingFavorites } = useContext(MovieContext)
  const navigate = useNavigate();

  const filteredMovie = movies.filter((elem: any) => elem._id === movieId)

  const favoriteList = JSON.parse(localStorage.getItem("favorites") || '""') || [];

  const handleClick = () => {
    updatingFavorites(filteredMovie[0]);
  };

  const conditionFavorites = favoriteList?.some((elem: any) => elem._id === movieId) ? "❤️" : "💙";

  return (
    <HeaderMovieContainer>
      <GoBack
        type="button"
        onClick={() => navigate(-1)}
      >
        <img
          className="goBackBtn"
          src={goBackArrow}
          alt="go back button"
        />
      </GoBack>
      <IconContainer
        type='button'
        onClick={handleClick}
      >
        {conditionFavorites}
      </IconContainer>
    </HeaderMovieContainer>
  );
}

export default HeaderMovie;
