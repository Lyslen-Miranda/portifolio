//imports principais
import React, { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

//imports de components
import * as S from './main_styled'
import Button from '../Button/Button'
import Habilidade from '../Habilidade/Habilidade'
import Projeto from '../Projeto/Projeto'

//Importes de imagens
import minhaFoto from '../../assets/minhaFoto.png'
import linkedin from '../../assets/linkedin.png'
import baixar from '../../assets/baixar.png'
import tag from '../../assets/tag.png'
import uiDesign from '../../assets/uiDesign.png'
import penTool from '../../assets/penTool.png'
import vscode from '../../assets/vscode.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import figma from '../../assets/figma.png'
import mobile from '../../assets/mobile.png'
import responsive from '../../assets/responsive.png'
import afterEffects from '../../assets/afterEffects.png'
import apresentacao from '../../assets/apresentacao.png'
import documentos from '../../assets/documentos.png'
import edicao from '../../assets/edicao.png'
import indesign from '../../assets/indesign.png'
import mockup from '../../assets/mockup.png'
import motion from '../../assets/motion.png'
import photoshop from '../../assets/photoshop.png'
import caneta from '../../assets/caneta.png'
import post from '../../assets/post.png'
import postIt from '../../assets/postIt.png'
import premiere from '../../assets/premiere.png'
import responsivo from '../../assets/responsivo.png'
import slide from '../../assets/slide.png'
import ilustrator from '../../assets/ilustrator.png'
import pessoas from '../../assets/pessoas.png'
import site from '../../assets/site.png'
import organograma from '../../assets/organograma.png'
import prototipo from '../../assets/prototipo.png'
import logozinho from '../../assets/logozinho.png'
import idvisual from '../../assets/idvisual.png'

//Código
export default function Main() {
  
  const [texto, setTexto] = useState(0)
  const carreira = ["Designer Gráfico", "UI Designer", "Desenvolvedora Front-End"]
  const [imagem, setImagem] = useState(0)
  const icon = [penTool, uiDesign, tag]

  const quantidade = [
    { width: 1, itemsToShow: 1},
    { width: 270, itemsToShow: 2},
    { width: 400, itemsToShow: 3},
    { width: 550, itemsToShow: 4},
    { width: 850, itemsToShow: 5},
  ]

  const quantidades = [
    { width: 530, itemsToShow: 1},
    { width: 600, itemsToShow: 2},
    { width: 900, itemsToShow: 3},
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTexto((textoInicial) => (textoInicial + 1) % carreira.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [carreira.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setImagem((imagemInicial) => (imagemInicial + 1) % icon.length)
    }, 1500)

    return () => clearInterval (interval)
  }, [icon.length])

  return (
    <main>
        <S.SectionInicial>
            <div>
                <h2>Olá, eu sou</h2>
                <h2 className='h2Destaque'>Lyslen Miranda</h2>
                <h3>{carreira[texto]}</h3>
            </div>
            <img src={icon[imagem]} />
        </S.SectionInicial>

        <S.SectionSobre id="sobre">
          <div className='boxGeral'>
            <img className='fotoPerfil' src={minhaFoto} alt="Foto de Lyslen" />
            <div>
              <div className='divInformacoes'>
                <h2 className='h2Destaque'>Sobre</h2>
                <h2>Lyslen Miranda</h2>
                <p>Bacharela em Design Gráfico com experiência na área e interesse maior na criação de websites, desde o design de suas interfaces até o seu desenvolvimento front-end.</p>
              </div>
              <div className='divButtons'>
                <Button icone={linkedin} texto={"LinkedIn"} link={"https://www.linkedin.com/in/lyslenmiranda"}/>
              </div>
            </div>
          </div>
        </S.SectionSobre>

        <S.SectionHabilidades id='habilidades'>
          <h2>Habilidades</h2>
          <S.DivMiniCards>
            <Carousel itemsToShow={5} breakPoints={quantidade}>
              <Habilidade icone={vscode} texto={"VS Code"}/>
              <Habilidade icone={react} texto={"React"}/>
              <Habilidade icone={html} texto={"HTML5"}/>
              <Habilidade icone={css} texto={"CSS3"}/>
              <Habilidade icone={javascript} texto={"JavaScript"}/>
              <Habilidade icone={git} texto={"Git"}/>
              <Habilidade icone={github} texto={"Github"}/>
              <Habilidade icone={figma} texto={"Figma"}/>
              <Habilidade icone={ilustrator} texto={"Illustrator"}/>
              <Habilidade icone={photoshop} texto={"Photoshop"}/>
              <Habilidade icone={indesign} texto={"InDesign"}/>
              <Habilidade icone={afterEffects} texto={"After Effects"}/>
              <Habilidade icone={premiere} texto={"Premiere Pro"}/>
              <Habilidade icone={pessoas} texto={"Análise de Público"}/>
              <Habilidade icone={site} texto={"Análise de Similares"}/>
              <Habilidade icone={postIt} texto={"Carding Sorting"}/>
              <Habilidade icone={organograma} texto={"Mapas Mentais"}/>
              <Habilidade icone={apresentacao} texto={"Moodboard"}/>
              <Habilidade icone={prototipo} texto={"Protótipos"}/>
              <Habilidade icone={mobile} texto={"Mobile First"}/>
              <Habilidade icone={responsive} texto={"Responsividade"}/>
              <Habilidade icone={responsivo} texto={"Design Adaptativo"}/>
              <Habilidade icone={caneta} texto={"Ilustração Vetorial"}/>
              <Habilidade icone={logozinho} texto={"Logo"}/>
              <Habilidade icone={idvisual} texto={"Identidade Visual"}/>
              <Habilidade icone={motion} texto={"Motion Graphics"}/>
              <Habilidade icone={edicao} texto={"Edição de Vídeos Simples"}/>
              <Habilidade icone={mockup} texto={"Mockups"}/>
              <Habilidade icone={slide} texto={"Criação de Apresentações"}/>
              <Habilidade icone={post} texto={"Cards para redes sociais"}/>
              <Habilidade icone={documentos} texto={"Layout para Impressão"}/>
            </Carousel>
          </S.DivMiniCards>
        </S.SectionHabilidades>

        <S.SectionProjetos id='projetos'>
          <h2>Projetos</h2>
          <S.DivCards>
              <Carousel itemsToShow={3} breakPoints={quantidades}>
                <Projeto icone={tag} titulo={"Selfcare"} texto={"Desenvolvimento Front-end de website e-commerce."} link ={"https://github.com/Lyslen-Miranda/Selfcare"} target/>
                <Projeto icone={tag} titulo={"Stopwatch"} texto={"UI Design e Desenvolvimento front-end de website com cronômetro."} link={"https://github.com/Lyslen-Miranda/lyslen"}/>
                <Projeto icone={tag} titulo={"McDonalds"} texto={"Desenvolvimento front-end de website baseado no site do McDonalds."} link={"https://github.com/Lyslen-Miranda/mcDonalds"}/>
                <Projeto icone={penTool} titulo={"Fiel Guindastes"} texto={"Desenvolvimento de Identidade Visual e UI Design."} link={"https://www.behance.net/gallery/172990229/Identidade-Visual-e-Interface-de-site-Fiel-Guindastes"}/>
              </Carousel>
            </S.DivCards>
        </S.SectionProjetos>

    </main>
  )
}
