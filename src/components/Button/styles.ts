import styled, { css } from 'styled-components'

type Props = {
  isCardLink?: boolean
}

export const ButtonEstilo = styled.button<Props>`
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);

  font-size: ${(props) => (!props.isCardLink ? '18px' : '14px')};
  padding: ${(props) => (!props.isCardLink ? '0 16px' : '8px 16px')};

  border: ${(props) =>
    !props.isCardLink
      ? '1px solid var(--cor-principal)'
      : '0 solid var(--cor-secundaria)'};

  ${(props) =>
    !props.isCardLink &&
    css`
      height: 40px;
      margin-left: 8px;
      cursor: pointer;
    `}

  ${(props) =>
    props.isCardLink &&
    css`
      display: inline-block;
      text-decoration: none;
      margin-top: 16px;
      font-weight: bold;
      border-radius: 8px;
      text-align: center;

      @media (max-width: 768px) {
        display: block;
      }
    `}
`
