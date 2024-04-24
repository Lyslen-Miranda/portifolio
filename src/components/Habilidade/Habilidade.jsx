import React from 'react'
import * as S from './habilidade_styled'

export default function Habilidade({icone, texto}) {
  return (
    <>
      <S.MiniCard>
          <img src={icone} />
          <p>{texto}</p>
      </S.MiniCard>
    </>
  )
}
