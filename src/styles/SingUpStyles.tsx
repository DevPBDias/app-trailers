import styled from 'styled-components';

export const SignUpPage = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    min-height: 100vh;
    gap: 4rem;
`;

export const FormSignUp = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    background-color: #272727;
    width: 80%;
    margin-bottom: 60%;
    gap: .5rem;
`;

export const Input = styled.input`
    background-color: #a3d9ff;
    height: 2.2rem;
    width: 95%;
    border: none;
    border-radius: 8px;
    text-align: left;
    color: #272727;
    padding-left: 0.5rem;
    margin-block: 1rem;
    &::placeholder{
        color: #272727;
        font-size: 1rem;
        padding-left: 0.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    `;

export const ContainerError = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: .3rem;
`;

export const SpanMsg = styled.span`
    color: #f4b860;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const AlertIcon = styled.img`
    width: .8rem;
    height: .8rem;
    background-color: #f4b860;
`;

export const SignUpBtn = styled.button`
    color: #272727;
    background-color: #f4b860;
    height: 2.2rem;
    width: 50%;
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
    margin-top: 3rem;
`;
