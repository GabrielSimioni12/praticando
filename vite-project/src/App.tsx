import { useEffect, useState } from 'react'
import FormularioFuncionario from './FormularioFuncionario'
import Contador from './Contador'
import Produtos, { type props } from './Produtos'




export type Funcionario = {
  id: number
  nome: string
  cargo: string
}


function App() {


  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])

  const [online, setOnline] = useState(false)
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [contador, setContador] = useState<number>(0)
  const [produtos, setProdutos] = useState<props[]>([{nome: 'gabriel'}, {nome: 'bruno'}])
  



  const adicionarPordutos = (name: string) => {
    setProdutos([...produtos, {nome: name}])
  }

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


  const Aumentar = () => {
    setContador(contador + 1)
  }

  const Diminuir = () => {
    setContador(contador - 1)
  }

  const Resetar = () => {
    setContador(0)
  }


 useEffect(() => {
 if(contador >= 10){
  alert('voce e preto')
 }
}, [contador])

useEffect(() => {
  if(nome === 'nigga') {
    alert('PALAVRA PROIBIDA')
  }
}, [nome])

const Alterar = () => {
  setOnline(!online)
}

useEffect(() => {
  console.log(online ? 'aaaaaaaaaaaaaaaaaa' : 'nigga');
  
})



  return (
    <div>


    <Contador

      Aumentar={Aumentar}
      Diminuir={Diminuir}
      Resetar={Resetar}
     />
     <p>{contador}</p>

      <FormularioFuncionario
        nome={nome}
        cargo={cargo}
        onNomeChange={(e) => setNome(e.target.value)}
        onCargoChange={(e) => setCargo(e.target.value)}
        onSalvar={adicionarFuncionario}
      />

      <p>ONLINE: {online ? 'ONLINE' : 'NAO ON'}</p>
      <button onClick={Alterar}>ativar</button>

      {funcionarios.map((funcionario, index) => (
        <div key={index}>
            <p>{funcionario.nome}</p>
             <p>{funcionario.cargo}</p>
        </div>
      ))}


     

       <Produtos produtos={produtos} />

    <input
  type="text"
  placeholder="Digite o produto"
  value={produtos}
  onChange={(e) => setProdutos(e.target.value)}
/>


     
    </div>
  )
}

export default App
