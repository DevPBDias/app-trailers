import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logoLogin from '../assets/logoLogin.png';
import googleIcon from '../assets/googleIcon.png';
import alertIcon from '../assets/alertIcon.png';
import { AlertIcon, ContainerError, FormLogin, GmailBtn,
  GmailLogo, Input, Or, RedefineMsg, SignInBtn,
  SignInPage, SignUpMsg, SpanMsg } from '../styles/SignInStyles';

const loginUserSchema = z.object({
  email: z.string()
    .nonempty('Email em branco')
    .regex(/\S+@\S+\.\S+/, 'Email inválido!'),
  password: z.string()
    .nonempty('Senha em branco'),
});

type LoginData = z.infer<typeof loginUserSchema>;

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <SignInPage>
      <img src={ logoLogin } alt="trailer app logo" />
      <FormLogin onSubmit={ handleSubmit(onSubmit) }>
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
        <Link to="/redefinepwd">
          <RedefineMsg>Esqueceu a senha?</RedefineMsg>
        </Link>
        <Or>ou</Or>
        <GmailBtn type="button">
          <GmailLogo src={ googleIcon } alt="icon of google" />
          <span>Gmail</span>
        </GmailBtn>
        <Link to="/redefinepwd">
          <SignUpMsg>Cadastre-se para acessar</SignUpMsg>
        </Link>
        <SignInBtn type="submit">
          Entrar
        </SignInBtn>
      </FormLogin>
    </SignInPage>
  );
}

export default SignIn;
