import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../components/HeaderTitle';
import { AddPageContainer, Button,
  FormMovie, Input,  } from '../styles/AddMovieStyles';
import { addMovie } from '../services/movieService';

const ERROR_MSG = 'Faltando informação';

const movieSchema = z.object({
  name: z.string().min(3, ERROR_MSG),
  image: z.string().min(3, ERROR_MSG),
  year: z.string().min(3, ERROR_MSG),
  director: z.string().min(3, ERROR_MSG),
  actors: z.string().min(3, ERROR_MSG),
  type: z.string().min(3, ERROR_MSG),
  platform: z.string().min(3, ERROR_MSG),
  linkTrailer: z.string().min(3, ERROR_MSG),
  category: z.string().min(3, ERROR_MSG),
  company: z.string().min(3, ERROR_MSG),
});

  type MovieData = z.infer<typeof movieSchema>;

function AddMovie() {
  const { register, handleSubmit } = useForm<MovieData>({
    resolver: zodResolver(movieSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: MovieData) => {
    try {
      await addMovie(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddPageContainer>
      <HeaderTitle titlePage="Adicionar" />
      <FormMovie onSubmit={ handleSubmit(onSubmit) }>
        <Input placeholder="Nome" type="text" { ...register('name') } />
        <Input placeholder='Imagem URL' type="text" { ...register('image') } />
        <Input placeholder="Ano" type="text" { ...register('year') } />
        <Input placeholder="Diretor" type="text" { ...register('director') } />
        <Input placeholder="Atores" type="text" { ...register('actors') } />
        <Input placeholder="Tipo" type="text" { ...register('type') } />
        <Input placeholder="Onde assistir ?" type="text" { ...register('platform') } />
        <Input placeholder="Link do trailer" type="text" { ...register('linkTrailer') } />
        <Input placeholder="Empresa" type="text" { ...register('company') } />
        <Input placeholder="Categoria" type="text" { ...register('category') } />
        <Button type="submit">
          Adicionar
        </Button>
      </FormMovie>
    </AddPageContainer>
  );
}

export default AddMovie;
