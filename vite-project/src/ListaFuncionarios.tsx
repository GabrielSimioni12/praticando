import React, { createContext, useContext } from 'react'
import { FuncionarioContext } from './FuncionarioContext'

const ListaFuncionarios = () => {

const {funcionario, setFuncionario} = useContext(FuncionarioContext)

  return (
    <div>{funcionario.map((func, index) => (
        <p key={index}>{func}</p>
    ))}

    <h1>aaaaaaaaaaaaaaa</h1>
    </div>
  )
}

export default ListaFuncionarios