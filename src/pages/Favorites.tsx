import { styled } from 'styled-components';
import HeaderTitle from '../components/HeaderTitle';
import Footer from '../components/Footer';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/MoviesContext';
import { Link } from 'react-router-dom';

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
        margin: .3rem;
        border-radius: 8px;
    }
`;

function Favorites() {
  const { favorites, setFavorites } = useContext(MovieContext)


  const loadFavorites = () => {
    const data = JSON.parse(localStorage.getItem("favorites") || '""') || [];
    setFavorites(data);
  };

  useEffect(() => {
    loadFavorites();
  }, []);


  return (
    <FavContainer>
      <HeaderTitle titlePage="Minha lista" />
      <div>
        {favorites && favorites.map((elem: any, index: number) => (
          <Link key={index} to={`/movie/${elem._id}`}>
          <img
            className="movieImg"
            key={index}
            src={elem.image}
            alt={`${elem.name} img`}
            />
            </Link>
        ))}
      </div>
      <Footer />
    </FavContainer>
  );
}

export default Favorites;
