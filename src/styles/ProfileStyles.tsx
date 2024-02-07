import styled from 'styled-components';

export const ProfilePage = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    background-color: #272727;
    padding-bottom: 5rem;
`;

export const UserContainer = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 80%;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    justify-items: center;
    width: 65%;
    gap: .5rem;
`;

export const UserName = styled.p`
    color: #F4B860;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const TextProfile = styled.p`
    color: #A3D9FF;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Button = styled.button`
    width: 3.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    background-color: #F4B860;
    border: none;
    border-radius: 8px;
`;

export const EditImg = styled.img`
    width: 1.75rem;
    height: 1.33331rem;
    flex-shrink: 0;
`;

export const DeleteImg = styled.img`
    width: 1.5rem;
    height: 1.6875rem;
    flex-shrink: 0;
`;

export const BtnsContainer = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    width: 50%;
    margin-block: 1.5rem;
`;

export const ProfileBtn = styled.button`
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
    margin-block: 1.5rem;
`;
