import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    width: 100%;
`;

export const TiltePlatform = styled.h3`
    color: #F4BD6F;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
`;

export const MoviesContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    overflow: auto;
    white-space: nowrap;
    width: 100%;

    img {
        width: 5.625rem;
        height: 7.5rem;
    }
`;
