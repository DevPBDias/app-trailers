import styled from 'styled-components';

export const HeaderTitleContainer = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    height: 4.5rem;
    margin-bottom: 1rem;
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

// HEADER HOME

export const HeaderHomeContainer = styled.header`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    height: 6rem;
    gap: .7rem;
`;

export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 3.75rem;
    height: 2.625rem;
    margin: auto;
`;

export const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
`;

export const Links = styled.a`
    color: #A3D9FF;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-decoration: none;
`;

// HEADER MOVIE

export const HeaderMovieContainer = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    background: rgba(39, 39, 39, 0.80);
    height: 4.5rem;
    margin-bottom: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const GoBack = styled.button`
    width: 3rem;
    height: 3rem;
    background: rgba(39, 39, 39, 0.80);
    margin-left: 1rem;
    border: none;

    .goBackBtn {
        width: 2.5rem;
        height: 2.5rem;
        flex-shrink: 0;
        background: rgba(39, 39, 39, 0.80);
    }
`;

export const IconContainer = styled.button`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 28%;
    margin-right: 2rem;
`;

export const FavIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
`;
