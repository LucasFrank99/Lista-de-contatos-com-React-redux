import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contatos'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contatos(
        'Lucas Frank Jara',
        '(53) 2222-2222',
        'lucasfrank11@hotmail.com',
        1
      ),
      new Contatos(
        'Lucas Frank Jara333',
        '(53) 2222-2222',
        'lucasfrank11@hotmail.com',
        2
      ),
      new Contatos(
        'Lucas Frank Jara222',
        '(53) 2222-2222',
        'lucasfrank11@hotmail.com',
        3
      )
    ]
  },

  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contatos) => contatos.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexContatos = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContatos >= 0) {
        state.itens[indexContatos] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Contatos>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { remover, editar, adicionar } = contatosSlice.actions

export default contatosSlice.reducer
