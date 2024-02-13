import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import { SearchContainer, SearchInput } from '../styles/SearchStyles';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { MovieContext } from '../context/MoviesContext';

const searchSchema = z.object({
  name: z.string().min(3, 'Nome curto'),
});

type SearchData = z.infer<typeof searchSchema>;

function Search() {
  const { register } = useForm<SearchData>({
    resolver: zodResolver(searchSchema),
  });

  const { movies } = useContext(MovieContext)

  return (
    <SearchContainer>
      <HeaderTitle titlePage="Pesquisa" />
      <SearchInput placeholder="Digite o nome..." type="text" { ...register('name') } />
      <div>
        {
            movies && movies.map((elem: any, index: number) => (
              <img
                className="movieImg"
                key={ index }
                src={ elem.image }
                alt={ `${elem.name} img` }
              />
            ))
        }
      </div>
      <Footer />
    </SearchContainer>
  );
}

export default Search;
