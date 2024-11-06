import styled, { css } from 'styled-components'

type Props = {
  fontSize: number
  isCardTitle: boolean
  fontFamily?: string
  smFontSize?: number
}

export const TituloEstilos = styled.h3<Props>`
  font-size: ${(props) => props.fontSize + 'px'};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : 'Lato, sans-serif'};

  ${(props) =>
    props.isCardTitle &&
    css`
      font-weight: bold;
      margin-bottom: 16px;
    `}

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.smFontSize ? props.smFontSize + 'px' : '1.5em'};
  }
`
