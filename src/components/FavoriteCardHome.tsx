import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';
import {
  Card, Container, ImgContainer,
  TextContainer,
} from '../styles/FavoriteCardHomeStyles';
import { Link, useNavigate } from 'react-router-dom';

function FavoriteCardHome() {
  const { movies } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <Container>
      {
        movies && movies.map((elem: any, index: number) => (
          <Card key={index} onClick={ () => navigate(`/movie/${elem._id}`)}>
            <ImgContainer>
              <img src={elem.image} alt="" />
            </ImgContainer>
            <TextContainer>
              <div>
                <h4>{elem.name}</h4>
                <span>{elem.company}</span>
              </div>
              <Link to={`${elem.linkTrailer}`}
              >
                Trailer
              </Link>
            </TextContainer>
          </Card>
        ))
      }
    </Container>
  );
}

export default FavoriteCardHome;
