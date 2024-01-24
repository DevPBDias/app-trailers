import styled from 'styled-components';

export const SignInPage = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    height: 100vh;
    gap: 4rem;
`;

export const FormLogin = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    background-color: #272727;
    width: 80%;
    gap: .5rem;
`;

export const Input = styled.input`
    background-color: #a3d9ff;
    height: 2.2rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    text-align: left;
    color: #272727;
    &::placeholder{
        color: #272727;
        font-family: 'Roboto';
        font-size: 1rem;
        padding-left: 0.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    `;

export const LinkText = styled.a`
    text-decoration: none;
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

export const RedefineMsg = styled.span`
    color: #a3d9ff;
    font-size: .8rem;
`;

export const Or = styled.span`
    color: #a3d9ff;
    font-size: 1rem;
    margin: auto;
    margin-block: 1rem;
`;

export const GmailBtn = styled.button`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    color: #272727;
    background-color: #a3d9ff;
    height: 2.2rem;
    width: 100%;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: .5rem;
`;

export const GmailLogo = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

export const SignUpMsg = styled.p`
    color: #a3d9ff;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const SignInBtn = styled.button`
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
