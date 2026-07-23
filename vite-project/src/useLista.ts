import { useState } from "react"



type Funcionario = {
  id: number
  nome: string
  cargo: string
  salario?: number
}

const useLista = () => {
const [funcionarios, setFuncionarios] = useState<Funcionario[]>([{ id: 1,nome: 'Gabriel Monteiro', cargo: 'preso'},
  {
    id: 1,
    nome: 'Gabriel',
    cargo: 'Front-End',
    salario: 4500
  },
  {
    id: 2,
    nome: 'Maria',
    cargo: 'Back-End',
    salario: 6000
  },
  {
    id: 3,
    nome: 'João',
    cargo: 'Analista de Dados',
    salario: 5500
  }
])

const adicionar = (id: number, nome: string, cargo: string, salario: number) => {
  setFuncionarios([...funcionarios, {
    id: Date.now(),
    nome: nome,
    cargo: cargo,
    salario: salario 
  }] 
  )
}

const remover = (ID: number) => {
  setFuncionarios(funcionarios.filter(e => e.id !== ID ))
}






  return {
    funcionarios,
    remover,
    adicionar
  }
}

export default useLista