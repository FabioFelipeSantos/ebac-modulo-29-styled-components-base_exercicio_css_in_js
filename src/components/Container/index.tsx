import React from 'react'
import { ContainerEstilo } from './styles'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return <ContainerEstilo>{children}</ContainerEstilo>
}
