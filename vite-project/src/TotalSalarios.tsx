import React, { useContext } from 'react'
import { FuncionarioContext } from './FuncionarioContext'

interface Funcionario {
  salario: number
}

const TotalSalarios = () => {
  const { funcionario, setFuncionario } = useContext(FuncionarioContext) as {
    funcionario: Funcionario[]
    setFuncionario: React.Dispatch<React.SetStateAction<Funcionario[]>>
  }

  const salarioTotal = funcionario.reduce((acc, func) => acc + func.salario, 0)

  return <div>{salarioTotal}</div>
}

export default TotalSalarios