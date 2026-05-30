import React from 'react'

const App = () => {


const produtos = [
  'Mouse',
  'Teclado',
  'Monitor',
  'Notebook',
  'headset'
]


const novaLista = produtos.filter(cu => cu !== 'Monitor')

  return (
    <div>
      {novaLista.map((c, index) => (
        <p key={index}>{c}</p>
      ))}
       {novaLista.length}
    </div>
  )
}

export default App