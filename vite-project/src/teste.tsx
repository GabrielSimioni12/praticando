import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const alterar = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      style={{
        color: darkMode ? 'red' : 'blue',
        height: '100vh'
      }}
    >
      <h1 style={{color: darkMode ? 'yellow' : 'black'}}>Ativar modo escuro</h1>

      <button
        onClick={alterar}
        style={{
          color: darkMode ? 'red' : 'blue'
        }}
      >
        Clique aqui para alterar o tema
      </button>

      <h1>Mudado com sucesso</h1>
    </div>
  )
}

export default App