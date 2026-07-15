import React, { useContext } from 'react'
import type { Usuario } from './App'
import { nomeContext } from './NomeContext'


const Perfil = () => {

const {nome, setNome} = useContext(nomeContext)


  return (
    <div>
        <h3>{nome}</h3>

        <button onClick={() => setNome('maria')}>clqiue aqui</button>

    </div>
  )
}

export default Perfil