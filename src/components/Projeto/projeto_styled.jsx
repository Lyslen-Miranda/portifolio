import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`

export const Card = styled.div`
    width: 280px;
    height: 250px;
    border-radius: 10px;
    border: solid 2px #181818;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 40px 20px;
    margin: 0 15px;

    &:hover{
        border: solid #766AFF 2px;
    }

    img{
        width: 45px;
    }

    h2{
        color: #ffffff;
        font-size: 26px;
        font-weight: 500;
    }

    p{
        color: #8C8C8C;
        font-size: 16px;
        font-weight: 500;
    }

    @media (max-width: 500px){
        width: 240px;
        transform: scale(0.7);
    }
`
