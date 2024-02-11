import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    padding-bottom: 1rem;
    background-color: #272727;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
`;

export const Title = styled.h3`
    color: #F4B860;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
`;

export const ImgContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;

    img {
        width: 20rem;
        height: 20rem;
        border-radius: 8px;
        margin-block: .5rem;
    }

`;
