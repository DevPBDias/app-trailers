import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import alertIcon from '../assets/alertIcon.png';
import { AlertIcon, ContainerError, FormSignUp,
  Input, SignUpBtn, SignUpPage, SpanMsg } from '../styles/SingUpStyles';
import { createUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';

const signUserSchema = z.object({
  email: z.string().regex(/\S+@\S+\.\S+/, 'Email inválido!'),
  password: z.string().min(3, 'Senha curta'),
  confirmPassword: z.string()
    .min(3, 'Senha curta'),
})
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Senhas diferentes',
    path: ['confirm_password'],
  });

  type LoginData = z.infer<typeof signUserSchema>;

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(signUserSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: LoginData) => {
    try {
      await createUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignUpPage>
      <HeaderTitle titlePage="Cadastro" />
      <FormSignUp onSubmit={ handleSubmit(onSubmit) }>
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
          { ...register('confirmPassword') }
        />
        {errors.confirmPassword
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.confirmPassword.message}</SpanMsg>
          </ContainerError>)}
        <SignUpBtn type="submit">
          Cadastrar
        </SignUpBtn>
      </FormSignUp>
    </SignUpPage>
  );
}

export default SignUp;
