import { useNavigate } from 'react-router-dom';
import homeIcon from '../assets/homeIcon.png';
import favIcon from '../assets/favIcon.png';
import searchIcon from '../assets/searchIcon.png';
import profileIcon from '../assets/profileIcon.png';
import { BtnFooter, FavIcon, FooterContainer,
  HomeIcon, ProfileIcon, SearchIcon } from '../styles/FooterStyles';

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <BtnFooter
        type="button"
        onClick={ () => navigate('/home') }
      >
        <HomeIcon src={ homeIcon } alt="home icon" />
      </BtnFooter>
      <BtnFooter
        type="button"
        onClick={ () => navigate('/favorites') }
      >
        <FavIcon src={ favIcon } alt="user delete" />
      </BtnFooter>
      <BtnFooter
        type="button"
        onClick={ () => navigate('/profile') }
      >
        <SearchIcon src={ profileIcon } alt="user delete" />
      </BtnFooter>
      <BtnFooter
        type="button"
        onClick={ () => navigate('/search') }
      >
        <ProfileIcon src={ searchIcon } alt="user delete" />
      </BtnFooter>
    </FooterContainer>
  );
}

export default Footer;
