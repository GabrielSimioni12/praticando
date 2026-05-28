import React, { useState } from 'react'

const App = () => {

const [mostrar, setmostrar] = useState<boolean>(false)

const mostrarMensagem = () => {
  setmostrar(!mostrar)
}


  return (
    <div>
      <h1>clique para exibir a mensagem</h1>
      <button onClick={mostrarMensagem}>clique aqui para exibir a mensagem</button>

      {mostrar && <h1>mensagem secreta</h1>}
  
    </div>
  )
}

export default App