import React, { useContext } from 'react'
import { TemaContext } from './TemaContext'

const Perfil = () => {

const {nome, idade} = useContext(TemaContext)


  return (
    <div>
        <p>nome {nome}</p>
        <p>idade {idade}</p>
    </div>
  )
}

export default Perfil