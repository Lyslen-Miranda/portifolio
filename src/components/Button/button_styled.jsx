import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`

export const Button = styled.button`
    background-color: #181818;
    width: 145px;
    height: 45px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: #766AFF;
    }

    img {
        width: 23px;
    }

    a {
        color: #ffffff;
        text-decoration: none;
        font-size: 14px;
        margin-left: 10px;
    }

    @media (max-width: 1000px) and (min-width: 501px){
        width: 118px;
        height: 42px;

        img {
            width: 19px;
        }

        a {
            font-size: 13px;

        }
    }

    @media (max-width: 500px) {
        width: 28vw;
        height: 40px;

        img {
            width: 4vw;
        }

        a {
            font-size: 3vw;
        }
    }
`