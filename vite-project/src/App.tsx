import React, { useState } from 'react'
import { nomeContext, receberContext, temaContext } from './NomeContext'
import Perfil from './Perfil'
import Recebedor from './recebedor'
import Tema from './Tema'


  type Propss = {
  nome: string
}

 export type Usuario = {
  usuario: Propss
}

const App = () => {


const [nome, setNome] = useState('Gabriel')

const [receber, setReceber] = useState(0)

const [tema, setTema] = useState<boolean>(false)






  return (
    <div>
      <nomeContext.Provider value={{ nome,  setNome }}>
          <Perfil />
      </nomeContext.Provider>


      
      <receberContext.Provider value={{receber, setReceber}}>
          <Recebedor />
      </receberContext.Provider>

        <temaContext.Provider value={{tema, setTema}}>
        <Tema />
        </temaContext.Provider>

      
    </div>
  )
}

export default App