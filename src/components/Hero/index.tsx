import Container from '../Container'
import Titulo from '../Titulo'
import { HeroEstilo } from './styles'

const Hero = () => (
  <HeroEstilo>
    <Container>
      <Titulo fontSize={48} fontFamily="Gloock, serif" smFontSize={32}>
        As melhores vagas para tecnologia, design e artes visuais.
      </Titulo>
    </Container>
  </HeroEstilo>
)

export default Hero
