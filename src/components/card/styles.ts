import styled from 'styled-components'

export const Card = styled.div`
  background-color: #ffcc;
  padding: 16px;
  padding-left: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 1000px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 32px;
  font-weigth: bold;
`

export const Descricao = styled.ul`
  margin-bottom: 32px;
  margin-top: 28px;
`

export const Dados = styled.li`
  font-size: 24px;
  font-weigth: bold;
  text-decoration: underline;
  font-family: Roboto, sans-serif;
  margin-top: 12px;
`

export const BarraInferior = styled.div`
border top: 1px solid rgba(0,0,0,0.1);
padding-top: 32px;`

export const Botao = styled.button`
  font-weigth: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: nome;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-left: 8px;
`
