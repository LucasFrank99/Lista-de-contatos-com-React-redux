import { Provider } from 'react-redux'
import Lista from './components/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Lista />
      </Container>
    </Provider>
  )
}

export default App
