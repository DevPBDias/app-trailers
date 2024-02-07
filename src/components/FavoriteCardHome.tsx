import { data } from '../data/moviesData';
import { Card, Container, ImgContainer,
  TextContainer,
  TitleSection } from '../styles/FavoriteCardHomeStyles';

function FavoriteCardHome() {
  return (
    <Container>
      <TitleSection>Meus favoritos</TitleSection>
      {
            data && data.map((elem, index) => (
              <Card key={ index }>
                <ImgContainer>
                  <img src={ elem.image } alt="" />
                </ImgContainer>
                <TextContainer>
                  <h4>{elem.name}</h4>
                  <span>{elem.company}</span>
                  <button>
                    Trailer
                  </button>
                </TextContainer>
              </Card>
            ))
        }
    </Container>
  );
}

export default FavoriteCardHome;
