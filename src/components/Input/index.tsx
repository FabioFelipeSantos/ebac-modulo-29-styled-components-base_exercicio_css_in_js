import { InputHTMLAttributes } from 'react'
import { InputEstilo } from './styles'

type Props = {
  onInputChange(value: string): void
  inputAttr?: InputHTMLAttributes<HTMLInputElement>
}

export default function Input({ onInputChange, inputAttr }: Props) {
  return (
    <InputEstilo
      onChange={(e) => onInputChange(e.target.value)}
      {...inputAttr}
    />
  )
}
