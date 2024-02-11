import { useContext } from 'react';
import { Container, Content, ImgContainer, Title } from '../styles/LatestCardStyles';
import Loading from './Loading';
import { MovieContext } from '../context/MoviesContext';
import { Link } from 'react-router-dom';

function LatestCard() {
  const { movies } = useContext(MovieContext);

  return (
    <Container>
      <Content>
        <Title>Destaques</Title>
        <ImgContainer>
        {
          movies.length === 0 ? <Loading /> : (
            <Link to={`/movie/${movies[0]._id}`}>
              <img src={ movies[0].image } alt="movie img" />
            </Link>
          )
        }
        </ImgContainer>
      </Content>
    </Container>
  );
}

export default LatestCard;
