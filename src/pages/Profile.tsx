import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../components/HeaderTitle';
import { ImgContainer, ProfileBtn, ProfilePage,
  TextContainer, TextProfile, UserContainer, UserName } from '../styles/ProfileStyles';
import profile from '../assets/profile.png';
import Footer from '../components/Footer';

function Profile() {
  const navigate = useNavigate();

  return (
    <ProfilePage>
      <HeaderTitle titlePage="Conta" />
      <UserContainer>
        <ImgContainer>
          <img src={ profile } alt="user" />
        </ImgContainer>
        <TextContainer>
          <UserName>User FullName </UserName>
          <TextProfile>User NickName</TextProfile>
          <TextProfile>User Email</TextProfile>
        </TextContainer>
      </UserContainer>
      <ProfileBtn
          type="button"
          onClick={ () => navigate('/edit') }
        >
        Editar perfil
      </ProfileBtn>
      <ProfileBtn
        type="button"
        onClick={ () => navigate('/redefine') }
      >
        Mudar senha
      </ProfileBtn>
      <ProfileBtn
        type="button"
        onClick={ () => navigate('/addMovie') }
      >
        Adicionar filme
      </ProfileBtn>
      <ProfileBtn
        type="button"
        onClick={ () => navigate('/') }
      >
        Sair
      </ProfileBtn>
      <Footer />
    </ProfilePage>
  );
}

export default Profile;
