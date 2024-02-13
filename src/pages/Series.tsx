import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderTitle from '../components/HeaderTitle';
import LatestCard from '../components/LatestCard';
import PlatformCardMovies from '../components/PlatformCardMovies';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MoviesContext';
import CategoryCard from '../components/CategoryCard';

const SeriesContainer = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
`;

function Series() {
  const { seriesType } = useContext(MovieContext);
  const [categoriesAll, setCategoriesAll] = useState<any>([])

  const removingSameCategory = async() => {
    const categories = await seriesType.map((elem: any) => elem.category)
    const set = new Set(categories);
    const arraySemDuplicados = Array.from(set);
    setCategoriesAll(arraySemDuplicados)
  }

  useEffect(() => {
    removingSameCategory()
  }, [])

  return (
    <SeriesContainer>
      <HeaderTitle titlePage="Séries" />
      <LatestCard data={seriesType} />
      {
        categoriesAll && categoriesAll.map((elem: any, index: number) => (
          <CategoryCard key={index} data={seriesType} name={elem} />
        ))
      }
      <Footer />
    </SeriesContainer>
  );
}

export default Series;
