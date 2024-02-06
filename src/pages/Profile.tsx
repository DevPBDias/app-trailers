import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../components/HeaderTitle';
import { BtnsContainer, Button, DeleteImg,
  EditImg, ImgContainer, ProfileBtn, ProfilePage,
  TextContainer, TextProfile, UserContainer, UserName } from '../styles/ProfileStyles';
import profile from '../assets/profile.png';
import editImg from '../assets/pencil.png';
import deleteImg from '../assets/trash.png';
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
      <BtnsContainer>
        <Button
          type="button"
          onClick={ () => navigate('/edit') }
        >
          <EditImg src={ editImg } alt="user edit" />
        </Button>
        <Button
          type="button"
          onClick={ () => navigate('/') }
        >
          <DeleteImg src={ deleteImg } alt="user delete" />
        </Button>
      </BtnsContainer>
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
