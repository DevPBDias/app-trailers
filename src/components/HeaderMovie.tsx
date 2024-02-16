import { useNavigate } from 'react-router-dom';
import goBackArrow from '../assets/goBack.png';
import {
  GoBack,
  HeaderMovieContainer, IconContainer
} from '../styles/HeaderStyles';
import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';

function HeaderMovie({ data }: any) {
  const { updatingFavorites } = useContext(MovieContext)
  const navigate = useNavigate();
  
  const favoriteList = JSON.parse(localStorage.getItem("favorites") || '""') || [];
  const conditionFavorites = favoriteList?.some((elem: any) => elem._id === data._id) ? "❤️" : "💙";
  
  const handleClick = () => {
    updatingFavorites(data);
  };


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
