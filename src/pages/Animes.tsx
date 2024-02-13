import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LatestCard from '../components/LatestCard';
import { useContext, useEffect, useState } from 'react';
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
  const { animesType } = useContext(MovieContext);
  const [categoriesAll, setCategoriesAll] = useState<any>([])

  const removingSameCategory = async() => {
    const categories = await animesType.map((elem: any) => elem.category)
    const set = new Set(categories);
    const arraySemDuplicados = Array.from(set);
    setCategoriesAll(arraySemDuplicados)
  }

  useEffect(() => {
    removingSameCategory()
  }, [])

  return (
    <AnimesContainer>
      <HeaderTitle titlePage="Animes" />
      <LatestCard data={animesType} />
      {
        categoriesAll && categoriesAll.map((elem: any, index: number) => (
          <CategoryCard key={index} data={animesType} name={elem} />
        ))
      }
      <Footer />
    </AnimesContainer>
  );
}

export default Animes;
