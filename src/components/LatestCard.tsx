import movieImg from '../assets/movieImg.png';
import { Container, Content, ImgContainer, Title } from '../styles/LatestCardStyles';

function LatestCard() {
  return (
    <Container>
      <Content>
        <Title>Destaques</Title>
        <ImgContainer>
          <img src={ movieImg } alt="movie img" />
        </ImgContainer>
      </Content>
    </Container>
  );
}

export default LatestCard;
