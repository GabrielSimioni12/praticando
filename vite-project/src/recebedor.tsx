import React, { useContext } from 'react'
import { receberContext } from './NomeContext'

const Recebedor = () => {

const {receber, setReceber} = useContext(receberContext)


  return (
    <div>
        <button onClick={() => setReceber(receber + 1)}></button>
        <h1>{receber}</h1>
    </div>
  )
}

export default Recebedor