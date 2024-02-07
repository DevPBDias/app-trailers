import styled from 'styled-components';

export const SearchContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
    min-height: 100vh;

    div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        justify-items: center;
        align-items: center;
        width: 80%;

        .movieImg {
            width: 9.0625rem;
            height: 9.0625rem;
        }
    }
`;

export const SearchInput = styled.input`
    background-color: #a3d9ff;
    width: 16.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 8px;
    text-align: left;
    color: #272727;
    padding-left: 0.5rem;
    margin-block: 1rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder{
        color: #272727;
        font-size: 1rem;
        padding-left: 0.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    `;
