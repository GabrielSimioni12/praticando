import React, { useState } from 'react'

const Botao = () => {

const [botao, setBotao] = useState<number>(0)



const adicionar = () => {
  setBotao(botao + 1)
}


  return (
    <div>
      <button onClick={adicionar}>clique aqui</button>
      <p>{botao}</p>
    </div>
  )
}

export default Botao