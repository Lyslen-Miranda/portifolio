import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`
export const MiniCard = styled.div`
    background-color: #181818;
    width: 120px;
    height: 120px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    cursor: grab;
    
    img{
        width: 33px;
    }

    p{
        color: #ffffff;
        font-size: 14px;
        margin-top: 10px;
        width: 105px;
        text-align: center;
    }
`
