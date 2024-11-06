import { FormEvent, useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { FormEstilo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormEstilo onSubmit={aoEnviarForm}>
      <Input
        onInputChange={setTermo}
        inputAttr={{
          type: 'search',
          placeholder: 'Front-end, fullstack, node, design'
        }}
      />
      <Button
        attributes={{ type: 'submit', title: 'Clique para pesquisar uma vaga' }}
      >
        Pesquisar
      </Button>
    </FormEstilo>
  )
}
export default FormVagas
