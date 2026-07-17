import React, { useContext } from 'react'
import { TemaContext } from './TemaContext'

const Header = () => {

const {nome} = useContext(TemaContext)

  return (
    <div>
        <h2>bem vindo {nome}</h2>
    </div>
  )
}

export default Header