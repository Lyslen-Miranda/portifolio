import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
`
export const Footer = styled.footer`
    height: 12vh;
    width: 100%;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: #8C8C8C;
        font-size: 16px;
    }
    
    @media (max-width: 1000px) and (min-width: 501px){
        p{
            font-size: 14px;
        }
    }

    @media (max-width: 500px){
        p{
            font-size: 12px;
        }
    }
`