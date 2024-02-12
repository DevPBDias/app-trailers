import { useNavigate, useParams } from 'react-router-dom';
import HeaderTitle from '../components/HeaderTitle';
import { ImgContainer, ProfileBtn, ProfilePage,
  TextContainer, TextProfile, UserContainer, UserName } from '../styles/ProfileStyles';
import Footer from '../components/Footer';
import { userLogged } from '../services/userService';
import { useEffect, useState } from 'react';
import { removeCookie } from 'typescript-cookie';

function Profile() {
  const navigate = useNavigate();
  const { id } = useParams()
  const [user, setUser] = useState<any>({})
  
  async function getUserInfo() {
    const response = await userLogged(id);
    setUser(response.data)
  }

  const Logout = () => {
    removeCookie('token')
    removeCookie('userId')
    navigate('/')
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <ProfilePage>
      <HeaderTitle titlePage="Conta" />
      <UserContainer>
        <ImgContainer>
          <img src={ user?.avatar } alt="user" />
        </ImgContainer>
        <TextContainer>
          <UserName>{user?.name}</UserName>
          <TextProfile>{user?.userName}</TextProfile>
          <TextProfile>{user?.email}</TextProfile>
        </TextContainer>
      </UserContainer>
      <ProfileBtn
          type="button"
          onClick={ () => navigate(`/edit/${id}`) }
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
        onClick={ Logout }
      >
        Sair
      </ProfileBtn>
      <Footer />
    </ProfilePage>
  );
}

export default Profile;
