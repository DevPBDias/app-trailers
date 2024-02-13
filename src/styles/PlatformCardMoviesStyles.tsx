import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    gap: 1.5rem;
    width: 80%;

    .link {
    width: 320px;
  }
`;

export const TiltePlatform = styled.h3`
    color: #F4BD6F;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
`;

export const PlatContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  width: 320px;

  .div-plat {
    width: 100%;
  }

  .link {
    width: 320px;
  }
`


export const ImageMovie = styled.img`
        width: 6rem;
        height: 7.5rem;
        border-radius: 8px;
        margin-block: 0.5rem;
`;
