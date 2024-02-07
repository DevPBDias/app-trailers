import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import { AlertIcon, Button, ContainerError,
  EditForm, FormContent, ImgContainer, Input,
  ProfilePage, SpanMsg } from '../styles/EditProfileStyles';
import profile from '../assets/profile.png';
import alertIcon from '../assets/alertIcon.png';

const editUserSchema = z.object({
  userName: z.string().min(3, 'Nome curto'),
  nickName: z.string().min(3, 'Apelido curto'),
  email: z.string().regex(/\S+@\S+\.\S+/, 'Email inválido!'),
});

  type UserData = z.infer<typeof editUserSchema>;

function EditProfile() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: zodResolver(editUserSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: UserData) => {
    console.log(data);
  };

  return (
    <ProfilePage>
      <HeaderTitle titlePage="Editar conta" />
      <FormContent>
        <ImgContainer>
          <img src={ profile } alt="user" />
        </ImgContainer>
        <Button
          type="button"
        >
          Alterar foto
        </Button>
        <EditForm onSubmit={ handleSubmit(onSubmit) }>
          <Input placeholder="Nome" type="text" { ...register('userName') } />
          {errors.userName
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.userName.message}</SpanMsg>
          </ContainerError>)}
          <Input placeholder="Apelido" type="text" { ...register('nickName') } />
          {errors.nickName
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.nickName.message}</SpanMsg>
          </ContainerError>)}
          <Input placeholder="Email" type="email" { ...register('email') } />
          {errors.email
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.email.message}</SpanMsg>
          </ContainerError>)}
          <Button
            type="submit"
            onClick={ () => navigate('/profile') }
          >
            Sair
          </Button>
        </EditForm>
      </FormContent>
    </ProfilePage>
  );
}

export default EditProfile;
