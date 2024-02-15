import HeaderTitle from '../components/HeaderTitle';
import { SearchContainer, SearchInput } from '../styles/SearchStyles';
import Footer from '../components/Footer';
import { useContext, useState } from 'react';
import { MovieContext } from '../context/MoviesContext';

function Search() {
  const { movies } = useContext(MovieContext)
  const [searchValue, setSearchValue] = useState<any>('')
  const [searchedMovies, setSearchedMovies] = useState<any>([])


  const findingMovies = () => {
    const foundMovies = movies.filter((movie: any) => movie.name.toLowerCase().includes(searchValue))
    if (foundMovies) {
      setSearchedMovies(foundMovies)
    }
  }

  const handleChange = ({ target }: any) => {
    setSearchValue(target.value)
    findingMovies();
  }

  return (
    <SearchContainer>
      <HeaderTitle titlePage="Pesquisa" />
      <SearchInput
        placeholder="Digite o nome..."
        value={searchValue}
        type="text"
        onChange={handleChange}
      />
      <div>
        {
          searchedMovies.length === 0 ? <p>Nenhum filme encontrado!!</p>
            : searchedMovies.map((elem: any, index: number) => (
              <img
                className="movieImg"
                key={index}
                src={elem.image}
                alt={`${elem.name} img`}
              />
            ))
        }
      </div>
      <Footer />
    </SearchContainer>
  );
}

export default Search;
