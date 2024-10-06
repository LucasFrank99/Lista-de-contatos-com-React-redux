import { useSelector } from 'react-redux'
import { Container } from '../../styles'
import CardContato from '../card'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <CardContato
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default Lista
