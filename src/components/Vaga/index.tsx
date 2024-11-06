import { ButtonEstilo } from '../Button/styles'
import ListItem from '../ListItem'
import Titulo from '../Titulo'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <ListItem>
    <Titulo fontSize={19} cardTitle>
      {props.titulo}
    </Titulo>

    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>

    <ButtonEstilo as={'a'} href="#" isCardLink>
      Ver detalhes e candidatar-se
    </ButtonEstilo>
  </ListItem>
)

export default Vaga
