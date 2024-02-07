import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import { SearchContainer, SearchInput } from '../styles/SearchStyles';
import Footer from '../components/Footer';
import { data } from '../data/moviesData';

const searchSchema = z.object({
  name: z.string().min(3, 'Nome curto'),
});

type SearchData = z.infer<typeof searchSchema>;

function Search() {
  const { register } = useForm<SearchData>({
    resolver: zodResolver(searchSchema),
  });

  return (
    <SearchContainer>
      <HeaderTitle titlePage="Pesquisa" />
      <SearchInput placeholder="Digite o nome..." type="text" { ...register('name') } />
      <div>
        {
            data && data.map((elem, index) => (
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
