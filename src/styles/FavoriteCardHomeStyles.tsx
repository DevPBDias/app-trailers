import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    margin-block: 1rem;
    width: 80%;
    gap: 0.7rem;
`;

export const Card = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: flex-start;
    background-color: #749AB5;
    width: 100%;
    height: 5.625rem;
    flex-shrink: 0;
    border-radius: 8px;
`;

export const TitleSection = styled.div`
    color: #F4B860;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
`;

export const ImgContainer = styled.div`
    img {
        width: 5.5625rem;
        height: 5.625rem;
        flex-shrink: 0;
        border-radius: 8px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    gap: .3rem;
    padding: .5rem;
    width: calc(100% - 5.5625rem);

    h4 {
        color: #272727;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 1.2rem */
    }

    span {
        color: #272727;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 0.75rem */
    }

    button {
        width: 6rem;
        height: 1.875rem;
        flex-shrink: 0;
        border-radius: 0.5rem;
        background: #F4B860;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
        margin-left: 50%;
        color: #272727;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 1.2rem */
    }
`;
