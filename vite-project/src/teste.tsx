import { useState } from 'react'

const App = () => {
  const [numeros, setNumeros] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7
  ])

  const adicionarNovo = () => {
    setNumeros([...numeros, 10])
  }

  return (
    <div>
      <h1>Lista de números</h1>

      <button onClick={adicionarNovo}>
        +
      </button>

      {numeros.map((numero, index) => (
        <p key={index}>{numero}</p>
      ))}
    </div>
  )
}

export default App