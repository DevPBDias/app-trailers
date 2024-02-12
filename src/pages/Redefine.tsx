import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import alertIcon from '../assets/alertIcon.png';
import { AlertIcon, ContainerError, FormRedefine,
  Input, RedefineBtn, RedefinePage, SpanMsg } from '../styles/RedefineStyles';
import { findUsers, newPassword } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const pwdUserSchema = z.object({
  email: z.string().min(3, 'Email em branco').email('Email inválido'),
  password: z.string().min(3, 'Senha curta'),
  confirm_password: z.string()
    .min(3, 'Senha curta'),
})
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: 'Senhas diferentes',
    path: ['confirm_password'],
  });

  type LoginData = z.infer<typeof pwdUserSchema>;

function Redefine() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(pwdUserSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (info: LoginData) => {
    const { data } = await findUsers();
    const findUser = await data.filter((user: any) => user.email === info.email)
    
    const userFormat: any = {
      name: findUser[0].name,
      email: findUser[0].email,
      userName: findUser[0].userName,
      avatar: findUser[0].avatar,
      password: info.password,
    }
    await newPassword(findUser[0]._id, userFormat)
    navigate('/')    
  };

  return (
    <RedefinePage>
      <HeaderTitle titlePage="Redefinir senha" />
      <FormRedefine onSubmit={ handleSubmit(onSubmit) }>
      <Input placeholder="Email" type="email" { ...register('email') } />
        {errors.email
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.email.message}</SpanMsg>
          </ContainerError>)}
        <Input placeholder="Senha" type="password" { ...register('password') } />
        {errors.password
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.password.message}</SpanMsg>
          </ContainerError>)}
        <Input
          placeholder="Confirmar senha"
          type="password"
          { ...register('confirm_password') }
        />
        {errors.confirm_password
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.confirm_password.message}</SpanMsg>
          </ContainerError>)}
        <RedefineBtn type="submit">
          Finalizar
        </RedefineBtn>
      </FormRedefine>
    </RedefinePage>
  );
}

export default Redefine;
