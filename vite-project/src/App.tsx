import React from 'react'

type Produto = {
  id: number
  nome: string
  preco: number
}


type Action =
  | {
      type: 'ADICIONAR'
      produto: Produto
    }
  | {
      type: 'REMOVER'
      id: number
    }
  | {
      type: 'LIMPAR'
    }


const App = () => {
  const produtosIniciais: Produto[] = [
  {
    id: 1,
    nome: 'Notebook',
    preco: 4500
  },
  {
    id: 2,
    nome: 'Mouse',
    preco: 150
  },
  {
    id: 3,
    nome: 'Teclado',
    preco: 300
  }
]



  return (
    <div>App</div>
  )
}

export default App