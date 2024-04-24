import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
`

export const Header = styled.header`
    height: 12vh;
    width: 100%;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    border-bottom: solid #181818 1px;
    position: fixed;
    z-index: 1000;

    .logo{
        height: 3.5vh;
        cursor: pointer;
    }
    
    nav{
      width: 35vw;
      height: 12vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    a{
        color: #ffffff;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
    }

    a:hover{
        color: #766AFF;
    }

    button{
        background-color: #000000;
        color: #ffffff;
        border: none;
        font-size: 23px;
        display: none;
        cursor: pointer;
    }

    button:hover{
        color: #766AFF;
    }

    @media (max-width: 1000px) and (min-width: 501px){

        .logo{
            height: 3.3vh;
        }

        button{
            display: block;
        }
        
        nav{
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 11.9vh;
            width: 50vw;
            height: 88vh;
            background-color: #080808;
            align-items: center;
            justify-content: space-between;
            padding: 150px 0;
            box-shadow: 0px 0px 1px 500px rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
    }

    @media (max-width: 500px){

        .logo{
            height: 3vh;
        }

        a{
            font-size: 13.5px;
         }

        button{
            display: block;
        }
        
        nav{
            flex-direction: column;
            position: absolute;
            right: 0;
            top: 11.9vh;
            width: 80vw;
            height: 88vh;
            background-color: #080808;
            align-items: center;
            justify-content: space-between;
            padding: 150px 0;
            box-shadow: 0px 0px 1px 500px rgba(0, 0, 0, 0.5);
        }
    }
`