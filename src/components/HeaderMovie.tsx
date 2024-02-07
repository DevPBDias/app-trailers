import { useNavigate } from 'react-router-dom';
import goBackArrow from '../assets/goBack.png';
import favIcon from '../assets/favIcon.png';
import { FavIcon, GoBack,
  HeaderMovieContainer, IconContainer } from '../styles/HeaderStyles';

function HeaderMovie() {
  const navigate = useNavigate();

  return (
    <HeaderMovieContainer>
      <GoBack
        type="button"
        onClick={ () => navigate(-1) }
      >
        <img
          className="goBackBtn"
          src={ goBackArrow }
          alt="go back button"
        />
      </GoBack>
      <IconContainer>
        <FavIcon src={ favIcon } alt="fav icon" />
        <FavIcon src={ favIcon } alt="fav icon" />
      </IconContainer>
    </HeaderMovieContainer>
  );
}

export default HeaderMovie;
