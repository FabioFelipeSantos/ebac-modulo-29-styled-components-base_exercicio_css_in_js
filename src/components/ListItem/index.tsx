import React from 'react'
import { ListItemEstilo } from './styles'

type Props = {
  children?: React.ReactNode
}

export default function ListItem({ children }: Props) {
  return <ListItemEstilo>{children}</ListItemEstilo>
}
