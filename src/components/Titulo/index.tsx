import React from 'react'
import { TituloEstilos } from './styles'

type Props = {
  fontSize: number
  cardTitle?: boolean
  fontFamily?: string
  smFontSize?: number
  children?: React.ReactNode
}

export default function Titulo({
  fontSize,
  cardTitle = false,
  fontFamily,
  smFontSize,
  children
}: Props) {
  return (
    <TituloEstilos
      isCardTitle={cardTitle}
      fontSize={fontSize}
      fontFamily={fontFamily}
      smFontSize={smFontSize}
    >
      {children}
    </TituloEstilos>
  )
}
