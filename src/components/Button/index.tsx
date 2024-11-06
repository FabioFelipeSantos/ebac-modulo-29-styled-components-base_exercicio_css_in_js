import React, { ButtonHTMLAttributes } from 'react'
import { ButtonEstilo } from './styles'

type Props = {
  children?: React.ReactNode
  isCardLink?: boolean
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>
}

export default function Button({
  isCardLink = false,
  children,
  attributes
}: Props) {
  return (
    <ButtonEstilo isCardLink={isCardLink} {...attributes}>
      {children}
    </ButtonEstilo>
  )
}
