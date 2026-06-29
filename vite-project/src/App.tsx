import { useState } from 'react'
import FormularioFuncionario from './FormularioFuncionario'
import ListaFuncionarios from './ListaFuncionarios'

export type Funcionario = {
  id: number
  nome: string
  cargo: string
}

function App() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  const adicionarFuncionario = () => {
    if (!nome || !cargo) return

    setFuncionarios([
      ...funcionarios,
      {
        id: Date.now(),
        nome,
        cargo
      }
    ])

    setNome('')
    setCargo('')
  }

  return (
    <div>
      <FormularioFuncionario
        nome={nome}
        cargo={cargo}
        onNomeChange={(e) => setNome(e.target.value)}
        onCargoChange={(e) => setCargo(e.target.value)}
        onSalvar={adicionarFuncionario}
      />

      <ListaFuncionarios
        funcionarios={funcionarios}
      />
    </div>
  )
}

export default App