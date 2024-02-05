import styled from 'styled-components';

export const HeaderTitleContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    height: 4.5rem;
`;

export const GoBackBtn = styled.button`
    width: 3rem;
    height: 3rem;
    background-color: #272727;
    margin-left: 1rem;
    border: none;
`;

export const GoBackIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
`;

export const Title = styled.h3`
    font-size: 1.6rem;
    color: #a3d9ff;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 30px */
    margin: auto;
`;
