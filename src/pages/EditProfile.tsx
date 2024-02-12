import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import {
  AlertIcon, Button, ContainerError,
  EditForm, FormContent, Input,
  ProfilePage, SpanMsg
} from '../styles/EditProfileStyles';
import alertIcon from '../assets/alertIcon.png';
import { findUsers, editUser } from '../services/userService';

const editUserSchema = z.object({
  name: z.string().min(3, 'Nome curto'),
  userName: z.string().min(3, 'Apelido curto'),
  email: z.string().regex(/\S+@\S+\.\S+/, 'Email inválido!'),
  avatar: z.string(),
});

type UserData = z.infer<typeof editUserSchema>;

function EditProfile() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: zodResolver(editUserSchema),
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const onSubmit = async (info: UserData) => {
    const { data } = await findUsers();
    const findUser = await data.filter((user: any) => user._id === id)
    await editUser(findUser[0]._id, info)
    navigate(`/profile/${id}`)
  };

  return (
    <ProfilePage>
      <HeaderTitle titlePage="Editar conta" />
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <EditForm onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Url imagem" type="text" {...register('avatar')} />
          {errors.avatar
            && (
              <ContainerError>
                <AlertIcon src={alertIcon} alt="" />
                <SpanMsg>{errors.avatar.message}</SpanMsg>
              </ContainerError>)}
          <Input placeholder="Nome" type="text" {...register('name')
          } />
          {errors.name
            && (
              <ContainerError>
                <AlertIcon src={alertIcon} alt="" />
                <SpanMsg>{errors.name.message}</SpanMsg>
              </ContainerError>)}
          <Input placeholder="Apelido" type="text" {...register('userName')} />
          {errors.userName
            && (
              <ContainerError>
                <AlertIcon src={alertIcon} alt="" />
                <SpanMsg>{errors.userName.message}</SpanMsg>
              </ContainerError>)}
          <Input placeholder="Email" type="email" {...register('email')} />
          {errors.email
            && (
              <ContainerError>
                <AlertIcon src={alertIcon} alt="" />
                <SpanMsg>{errors.email.message}</SpanMsg>
              </ContainerError>)}
          <Button
            type="submit"
          >
            Sair
          </Button>
        </EditForm>
      </FormContent>
    </ProfilePage>
  );
}

export default EditProfile;
