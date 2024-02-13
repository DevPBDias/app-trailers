import { styled } from 'styled-components';
import HeaderTitle from '../components/HeaderTitle';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';

const FavContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
    min-height: 100vh;

    div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        justify-items: center;
        align-items: center;
        width: 80%;
    }

    .movieImg {
        width: 9.0625rem;
        height: 9.0625rem;
    }
`;

function Favorites() {
  const { newMovies } = useContext(MovieContext)

  return (
    <FavContainer>
      <HeaderTitle titlePage="Minha lista" />
      <div>
        { newMovies && newMovies.map((elem: any, index: number) => (
          <img
            className="movieImg"
            key={ index }
            src={ elem.image }
            alt={ `${elem.name} img` }
          />
        ))}
      </div>
      <Footer />
    </FavContainer>
  );
}

export default Favorites;
