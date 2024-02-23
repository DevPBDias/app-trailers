import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LatestCard from '../components/LatestCard';
import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';
import CategoryCard from '../components/CategoryCard';

const AnimesContainer = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
`;

function Animes() {
  const { movies } = useContext(MovieContext)

  const filteredData = movies?.filter((elem: any) => elem.type === 'Anime')
  const categories = filteredData?.map((elem: any) => elem.category)
  const set = new Set(categories);
  const categoriesAll = Array.from(set);

  return (
    <AnimesContainer>
      <HeaderTitle titlePage="Animes" />
      {
        filteredData && <LatestCard data={filteredData} />
      }
      {
        categoriesAll && categoriesAll?.map((elem: any, index: number) => (
          <CategoryCard key={index} data={filteredData} name={elem} />
        ))
      }
      <Footer />
    </AnimesContainer>
  );
}

export default Animes;
