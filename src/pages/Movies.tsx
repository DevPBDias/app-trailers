import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LatestCard from '../components/LatestCard';
import { useContext } from 'react';
import CategoryCard from '../components/CategoryCard';
import { MovieContext } from '../context/MoviesContext';

const MovieContainer = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
`;

function Movies() {
  const { movies } = useContext(MovieContext)

  const filteredData = movies?.filter((elem: any) => elem.type === 'Filme')
  const categories = filteredData?.map((elem: any) => elem.category)
  const set = new Set(categories);
  const categoriesAll = Array.from(set);

  return (
    <MovieContainer>
      <HeaderTitle titlePage="Filmes" />
      {
        filteredData && <LatestCard data={filteredData} />
      }
      {
        categoriesAll && categoriesAll.map((elem: any, index: number) => (
          <CategoryCard key={index} data={filteredData} name={elem} />
        ))
      }
      <Footer />
    </MovieContainer>
  );
}

export default Movies;
