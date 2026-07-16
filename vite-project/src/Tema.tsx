import React, { useContext } from 'react'
import { temaContext } from './NomeContext'

const Tema = () => {

const {tema, setTema} = useContext(temaContext)


const AlterarFundo = () => {
    setTema((temaAtual) => !temaAtual )
}

  return (
    <div
      style={{ backgroundColor: tema ? "black" : "white", color: tema ? "white" : "black", minHeight: "100vh",  }}  >
      <button onClick={AlterarFundo}>alterar</button>
    </div>
  )
}

export default Tema