import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../components/HeaderTitle';
import alertIcon from '../assets/alertIcon.png';
import { AddPageContainer, AlertIcon, Button, ContainerError,
  FormMovie, Input, SpanMsg } from '../styles/AddMovieStyles';

const ERROR_MSG = 'Faltando informação';

const movieSchema = z.object({
  name: z.string().min(3, ERROR_MSG),
  image: z.string().min(3, ERROR_MSG),
  year: z.string().min(3, ERROR_MSG),
  director: z.string().min(3, ERROR_MSG),
  actors: z.string().min(3, ERROR_MSG),
  type: z.string().min(3, ERROR_MSG),
  platform: z.string().min(3, ERROR_MSG),
  trailerLink: z.string().min(3, ERROR_MSG),
});

  type MovieData = z.infer<typeof movieSchema>;

function AddMovie() {
  const { register, handleSubmit, formState: { errors } } = useForm<MovieData>({
    resolver: zodResolver(movieSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: MovieData) => {
    console.log(data);
  };

  return (
    <AddPageContainer>
      <HeaderTitle titlePage="Adicionar" />
      <FormMovie onSubmit={ handleSubmit(onSubmit) }>
        <Input placeholder="Nome" type="text" { ...register('name') } />
        <input type="file" { ...register('image') } />
        <Input placeholder="Ano" type="text" { ...register('year') } />
        <Input placeholder="Diretor" type="text" { ...register('director') } />
        <Input placeholder="Atores" type="text" { ...register('actors') } />
        <Input placeholder="Categoria" type="text" { ...register('type') } />
        <Input placeholder="Onde assistir ?" type="text" { ...register('platform') } />
        <Input placeholder="Link do trailer" type="text" { ...register('trailerLink') } />
        {errors.name
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.name.message}</SpanMsg>
          </ContainerError>)}
        <Button type="submit" onClick={ () => navigate('/profile') }>
          Adicionar
        </Button>
      </FormMovie>
    </AddPageContainer>
  );
}

export default AddMovie;
