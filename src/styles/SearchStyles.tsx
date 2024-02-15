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
    gap: .5rem;

    div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        width: 80%;
        
        p {
            color: #f4b860;
            font-size: 1.2rem;
            margin: auto;
            margin-top: 2rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .movieImg {
            width: 42%;
            height: 9rem;
            margin: .3rem;
            border-radius: 8px;
        }
    }
`;

export const SearchInput = styled.input`
    background-color: #a3d9ff;
    width: 80%;
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
