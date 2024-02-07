import { styled } from 'styled-components';
import HeaderTitle from '../components/HeaderTitle';
import { data } from '../data/moviesData';
import Footer from '../components/Footer';

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
  return (
    <FavContainer>
      <HeaderTitle titlePage="Minha lista" />
      <div>
        { data && data.map((elem, index) => (
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
