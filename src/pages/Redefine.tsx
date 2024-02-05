import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import HeaderTitle from '../components/HeaderTitle';
import alertIcon from '../assets/alertIcon.png';
import { AlertIcon, ContainerError, FormRedefine,
  Input, RedefineBtn, RedefinePage, SpanMsg } from '../styles/RedefineStyles';

const pwdUserSchema = z.object({
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

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <RedefinePage>
      <HeaderTitle titlePage="Redefinir senha" />
      <FormRedefine onSubmit={ handleSubmit(onSubmit) }>
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
        <RedefineBtn type="submit">
          Finalizar
        </RedefineBtn>
      </FormRedefine>
    </RedefinePage>
  );
}

export default Redefine;
