import { useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar, adicionar } from '../../store/reducers/contatos'
import Contatos from '../../models/Contatos'

type Props = Contatos

const CardContato = ({ nome, numero, email, id }: Props) => {
  const dispatch = useDispatch()
  const [edicao, setEdicao] = useState(false)

  const [nomeNew, setNomeNew] = useState(nome)
  const [numeroNew, setNumeroNew] = useState(numero)
  const [emailNew, setEmailNew] = useState(email)

  const adicionarContato = () => {
    const novoContato = {
      nome: 'Novo Contato',
      numero: '',
      email: '',
      id
    }

    dispatch(adicionar(novoContato))
  }

  return (
    <S.Card>
      <S.Titulo>
        {edicao ? (
          <input
            type="text"
            value={nomeNew}
            onChange={(evento) => setNomeNew(evento.target.value)}
          />
        ) : (
          nome
        )}
      </S.Titulo>
      <S.Descricao>
        <S.Dados>
          {edicao ? (
            <input
              type="text"
              value={numeroNew}
              onChange={(evento) => setNumeroNew(evento.target.value)}
            />
          ) : (
            numero
          )}
        </S.Dados>
        <S.Dados>
          {edicao ? (
            <input
              type="email"
              value={emailNew}
              onChange={(evento) => setEmailNew(evento.target.value)}
            />
          ) : (
            email
          )}
        </S.Dados>
      </S.Descricao>
      <S.BarraInferior>
        {edicao ? (
          <>
            <S.Botao
              onClick={() => {
                dispatch(
                  editar({
                    nome: nomeNew,
                    numero: numeroNew,
                    email: emailNew,
                    id
                  })
                )
                setEdicao(false)
              }}
            >
              Salvar
            </S.Botao>
            <S.Botao
              onClick={() => {
                dispatch(
                  editar({
                    nome: nome,
                    numero: numero,
                    email: email,
                    id
                  })
                )
                setEdicao(false)
              }}
            >
              Cancelar
            </S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEdicao(true)}>Editar</S.Botao>
            <S.Botao onClick={() => dispatch(remover(id))}>
              Excluir contato
            </S.Botao>
          </>
        )}

        <S.Botao onClick={adicionarContato}>Adicionar Contato</S.Botao>
      </S.BarraInferior>
    </S.Card>
  )
}

export default CardContato
