import styled from 'styled-components';

export const ProfilePage = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    height: 100vh;
`;

export const FormContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin: auto;
    width: 100%;
`;

export const Button = styled.button`
    color: #272727;
    background-color: #f4b860;
    height: 2.2rem;
    width: 50%;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
    margin-block: 1rem;
`;

export const EditForm = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    background-color: #272727;
    width: 70%;
    gap: 1.5rem;
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
    margin-block: .5rem;
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
    font-size: .8rem;
`;

export const AlertIcon = styled.img`
    width: .8rem;
    height: .8rem;
    background-color: #f4b860;
`;
