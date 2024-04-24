import React from 'react'
import * as S from './projeto_styled'

export default function Projeto({icone, titulo, texto, link}) {
  return (
    <>
      <a href={link} target='__blank'>
        <S.Card>
          <img src={icone}/>
          <h2>{titulo}</h2>
          <p>{texto}</p>
          </S.Card>
      </a>
    </>
  )
}
