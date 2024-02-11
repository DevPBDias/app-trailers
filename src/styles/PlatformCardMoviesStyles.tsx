import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    gap: 1.5rem;
    width: 80%;
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

  .div-plat {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    overflow: auto;
    white-space: nowrap;
    gap: .5rem;
  }
`


export const MoviesContainer = styled.div`
    img {
        width: 5.625rem;
        height: 7.5rem;
        border-radius: 8px;
    }
`;
