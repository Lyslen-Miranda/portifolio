import React from 'react'
import * as S from './button_styled'

export default function Button({icone, texto, link}) {
  return (
    <S.Button>
        <img src={icone}/>
        <a href={link} target='_blank'>{texto}</a>
    </S.Button>
  )
}
