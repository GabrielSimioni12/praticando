import React, { useState } from 'react'
import useLista from './useLista'
const App = () => {

 const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState(0);
  const [filtrar, setFiltrar] = useState('')


  const {
      adicionar,
      funcionarios,
      remover
  } = useLista()

const adicionarFuncionario = () => {
  const id = Date.now()
  adicionar(id, nome, cargo, salario)

  setNome('')
  setCargo('')
  setSalario(0)
}


const FuncionariosFiltrados = funcionarios.filter( funcionario => funcionario.nome.toLowerCase().includes(filtrar.toLowerCase()))

  return (
    <div>
      <h3>lista de funcionarios</h3>
        <input value={filtrar} onChange={(e) => setFiltrar(e.target.value)} />
      {FuncionariosFiltrados.map((funcionario) => (
        <div key={funcionario.id}>
            <p>{funcionario.id} - {funcionario.nome} - {funcionario.cargo} - {funcionario.salario}</p>
            <button onClick={() => remover(funcionario.id)}>remover</button>
        </div>
      ))}


      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <input value={cargo} onChange={(e) => setCargo(e.target.value)} />
      <input value={salario} onChange={(e) => setSalario(Number(e.target.value))} />


      <button onClick={adicionarFuncionario}>adicionar</button>



    </div>
  )
}

export default App