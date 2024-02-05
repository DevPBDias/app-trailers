import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import alertIcon from '../assets/alertIcon.png';
import { AlertIcon, ContainerError, FormSignUp,
  Input, SignUpBtn, SignUpPage, SpanMsg } from '../styles/SingUpStyles';

const signUserSchema = z.object({
  email: z.string().regex(/\S+@\S+\.\S+/, 'Email inválido!'),
  password: z.string().min(3, 'Senha curta'),
  confirm_password: z.string()
    .min(3, 'Senha curta'),
})
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: 'Senhas diferentes',
    path: ['confirm_password'],
  });

  type LoginData = z.infer<typeof signUserSchema>;

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(signUserSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
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
          type="confirm_password"
          { ...register('confirm_password') }
        />
        {errors.confirm_password
        && (
          <ContainerError>
            <AlertIcon src={ alertIcon } alt="" />
            <SpanMsg>{errors.confirm_password.message}</SpanMsg>
          </ContainerError>)}
        <SignUpBtn type="submit">
          Cadastrar
        </SignUpBtn>
      </FormSignUp>
    </SignUpPage>
  );
}

export default SignUp;
