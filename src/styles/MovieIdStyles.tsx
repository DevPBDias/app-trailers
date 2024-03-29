import styled from 'styled-components';

export const MovieIdContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
    position: relative;
`;

export const CardContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    margin-bottom: 2rem;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: .5rem;
`;

export const ImgContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 30rem;
        flex-shrink: 0;
    }
`;

export const TextContainer = styled.div`
    width: 80%;
    gap: .5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    h4 {
        color: #F4B860;
        font-size: 1.5625rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 1.875rem */
    }

    .info {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
    }

    span {
        color: #A3D9FF;
        font-size: 0.8125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 0.975rem */
    }

    p {
        width: 3.5rem;
        height: 1.25rem;
        background-color: #9EEFFD;
        border: none;
        border-radius: 8px;
        color: #272727;
        text-align: center;
        font-size: 0.8125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 0.975rem */
    }
`;

export const BtnContainer = styled.div`
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin-bottom: 2rem;

    a {
        width: 6rem;
        height: 1.8rem;
        flex-shrink: 0;
        border-radius: 0.5rem;
        background: #F4B860;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: none;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #272727;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 1.2rem */
    }

    .plat-btn {
        width: 6rem;
        height: 1.8rem;
        flex-shrink: 0;
        border-radius: 0.5rem;
        background: #272727;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: 1px solid #F4B860;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #F4B860;
        font-size: .85rem;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 1.2rem */
    }
`;
