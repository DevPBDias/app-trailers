import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';
import { Card, Container, ImgContainer,
  TextContainer,
  TitleSection } from '../styles/FavoriteCardHomeStyles';
import { IMovieData } from '../types';

function FavoriteCardHome() {
  const { movies } = useContext(MovieContext);

  return (
    <Container>
      <TitleSection>Meus favoritos</TitleSection>
      {
            movies && movies.map((elem: IMovieData, index: number) => (
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
