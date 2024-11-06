import Cabecalho from './components/Cabecalho'
import Container from './components/Container'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import Reset from './styles'

function App() {
  return (
    <>
      <Reset />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
