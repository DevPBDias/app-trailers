import { useNavigate } from 'react-router-dom';
import goBackArrow from '../assets/goBack.png';
import { GoBackBtn, GoBackIcon,
  HeaderTitleContainer, Title } from '../styles/HeaderStyles';

type IHeaderProps = {
  titlePage: string,
};

function HeaderTitle({ titlePage }: IHeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderTitleContainer>
      <GoBackBtn
        type="button"
        onClick={ () => navigate(-1) }
      >
        <GoBackIcon src={ goBackArrow } alt="go back button" />
      </GoBackBtn>
      <Title>{titlePage}</Title>
    </HeaderTitleContainer>
  );
}

export default HeaderTitle;
