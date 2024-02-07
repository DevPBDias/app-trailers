import { movieData } from '../data/moviesData';
import { Container, Content,
  MoviesContainer, TiltePlatform } from '../styles/PlatformCardMoviesStyles';

function PlatformCardMovies() {
  return (
    <Container>
      {
            movieData && movieData.map((elem, index) => (
              <Content key={ index }>
                <TiltePlatform>{elem.platform}</TiltePlatform>
                <MoviesContainer>
                  {elem.movies.map((movies, indexMovie) => (
                    <div key={ indexMovie }>
                      <img
                        src={ movies }
                        alt={ `movie img ${indexMovie}` }
                      />
                    </div>
                  ))}
                </MoviesContainer>
              </Content>
            ))
        }
    </Container>
  );
}

export default PlatformCardMovies;
