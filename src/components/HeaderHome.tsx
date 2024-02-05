import { HeaderHomeContainer, Links, Logo,
  LogoContainer, NavContainer } from '../styles/HeaderStyles';
import logoHome from '../assets/logoHome.png';

function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <LogoContainer>
        <Logo src={ logoHome } alt="logo app home" />
      </LogoContainer>
      <NavContainer>
        <Links href="/movies">Filmes</Links>
        <Links href="/series">Séries</Links>
        <Links href="/animes">Animes</Links>
      </NavContainer>
    </HeaderHomeContainer>
  );
}

export default HeaderHome;
