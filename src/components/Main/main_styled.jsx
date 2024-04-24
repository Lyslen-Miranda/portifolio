import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
`
export const SectionInicial = styled.section`
    background-color: #000000;
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10vw;

    div{
        width: 500px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h2{
        color: #ffffff;
        font-size: 50px;
        font-weight: 600;
    }

    .h2Destaque{
        color: #766AFF;
    }

    h3{
        color: #8C8C8C;
        font-size: 26px;
        font-weight: 400;
        margin-top: 8px;
    }

    img{
        width: 22vw;
    }

    @media (max-width: 1000px) and (min-width: 501px){
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: space-around;
        padding: 0 10vw;
        

        div{
            width: 400px;
            margin-bottom: 30vh;
        }

        img {
            margin-bottom: 10px;
            margin-top: 28vh;
            width: 110px;
        }

        h2{
            font-size: 43px;
        }

        h3{
            font-size: 25px;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: space-around;
        padding: 0 10vw;
        

        div{
            width: 70vw;
            margin-bottom: 30vh;
        }

        img {
            margin-bottom: 10px;
            margin-top: 28vh;
            width: 25vw;
        }

        h2{
            font-size: 8vw;
        }

        h3{
            font-size: 4.5vw;
        }
    }
`

export const SectionSobre = styled.section`
    background-color: #000000;
    height: 110vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .boxGeral{
        border: solid #181818 2px;
        border-radius: 10px;
        width: 65vw;
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 2vw;
    }

    .fotoPerfil{
        width: 23.5vw;
        border-radius: 10px;
        margin-right: 2vw;
    }

    .divInformacoes{
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h2 {
        font-size: 30px;
        color: #ffffff;
        margin-bottom: 7px;
    }

    .h2Destaque {
        color: #766AFF;
    }

    p{
        color: #8C8C8C;
        font-size: 16px;
        width: 32vw;
        margin-bottom: 7px;
    }

    .divButtons{
        display: flex;
        width: 310px;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    @media (max-width: 1000px) and (min-width: 501px){
        .boxGeral{
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding-left: 40px;
        }

        .fotoPerfil{
            width: 13vw;
            margin-bottom: 15px;
        }

        .divInformacoes{
            width: 300px;
        }

        h2 {
            font-size: 26px;
            margin-bottom: 7px;
        }
        
        p{
            width: 54vw;
            font-size: 16px;
        }

        .divButtons{
            width: 250px;
            margin-top: 20px;
         }
    }

    @media (max-width: 500px) {
        .boxGeral{
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding-left: 30px;
            width: 70vw;
        }

        .fotoPerfil{
            width: 15vw;
            margin-bottom: 15px;
        }

        .divInformacoes{
            width: 200px;
        }

        h2 {
            font-size: 23px;
            margin-bottom: 7px;
        }
        
        p{
            width: 55vw;
            font-size: 15px;
        }

        .divButtons{
            flex-direction: column;
            width: 53vw;
            height: 100px;
            justify-content: space-between;
         }
    }
`

export const SectionHabilidades = styled.section`
    height: 88vh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 38vh 0 20vh 0;

    h2 {
        font-size: 30px;
        color: #766AFF;
    }

    @media (max-width: 1000px) and (min-width: 501px){
        h2 {
        font-size: 26px;
        }
    }

    @media (max-width: 500px){
        h2 {
        font-size: 22px;
        }
    }
`

export const DivMiniCards = styled.div`
    width: 65vw;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;

    .rec.rec-pagination{
        margin-top: 40px;
    }

    .rec.rec-dot{
        background-color: #181818;
        box-shadow: none;
    }

    .rec.rec-dot.rec-dot_active{
        background-color: #766AFF;
        box-shadow: none;
    }

    .rec.rec-arrow {
        background-color: #181818;
        color: #ffffff;
        transform: scale(0.8)
    }

    .rec.rec-arrow:hover {
        background-color: #766AFF;
    }

    @media (max-width: 800px){
        .rec.rec-pagination{
            display: none;
        }

        .rec.rec-carousel{
            transform: scale(1.3);
        }

        .rec.rec-arrow {
        transform: scale(0.6)
        }
    }
`

export const SectionProjetos = styled.section`
    background-color: #000000;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 18vh 0;

    h2 {
        font-size: 30px;
        color: #766AFF;
    }

    @media (max-width: 1000px) and (min-width: 501px){
        h2 {
        font-size: 26px;
        margin-bottom: 18px;
        }
    }

    @media (max-width: 500px){
        padding: 25vh 0 30vh 0;

        h2 {
        font-size: 22px;
        }
    }
`

export const DivCards = styled.div`
    width: 68vw;
    height: 45vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;

    a {
        text-decoration: none;
    }

    .rec.rec-pagination{
        margin-top: 40px;
    }

    .rec.rec-dot{
        background-color: #181818;
        box-shadow: none;
    }

    .rec.rec-dot.rec-dot_active{
        background-color: #766AFF;
        box-shadow: none;
    }

    .rec.rec-arrow {
        background-color: #181818;
        color: #ffffff;
        transform: scale(0.8)
    }

    .rec.rec-arrow:hover {
        background-color: #766AFF;
    }

    @media (max-width: 800px){
        width: 85vw;
        margin-top: 0px;

        .rec.rec-pagination{
            display: none;
        }
    }
`

