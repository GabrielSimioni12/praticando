import React, { useState } from 'react'
import ListaFuncionarios from './ListaFuncionarios'
import CardFuncionario from './CardFuncionario'
import { FuncionarioContext } from './FuncionarioContext'
import TotalSalarios from './TotalSalarios'

const App = () => {

const [funcionario, setFuncionarios] = useState([ {

    id: 1,
    nome: 'Gabriel',
    cargo: 'Desenvolvedor Front-End',
    salario: 4500
  },
  {
    id: 2,
    nome: 'Beatriz',
    cargo: 'UX Designer',
    salario: 5200
  },
  {
    id: 3,
    nome: 'João',
    cargo: 'Analista de Dados',
    salario: 6100
  },
  {
    id: 4,
    nome: 'Maria',
    cargo: 'Product Owner',
    salario: 8000
  },
  {
    id: 5,
    nome: 'Pedro',
    cargo: 'Suporte Técnico',
    salario: 2800
  },
  {
    id: 6,
    nome: 'Ana',
    cargo: 'Desenvolvedora Back-End',
    salario: 7000
  }
])



  return (
    <div>
        {funcionario.map((func) => (
          <CardFuncionario funcionario={func} key={func.id} />
        ))}


        <FuncionarioContext.Provider value={{ funcionario, setFuncionarios}}>
        <ListaFuncionarios />
        <TotalSalarios />
        </FuncionarioContext.Provider>

      
    </div>
  )
}

export default App