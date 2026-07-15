import React, { useState } from 'react'
import { nomeContext, receberContext } from './NomeContext'
import Perfil from './Perfil'
import Recebedor from './recebedor'


  type Propss = {
  nome: string
}


 export type Usuario = {
  usuario: Propss
}

const App = () => {


const [nome, setNome] = useState('Gabriel')

const [receber, setReceber] = useState(0)




  return (
    <div>
      <nomeContext.Provider value={{ nome,  setNome }}>
          <Perfil />
      </nomeContext.Provider>


      
      <receberContext.Provider value={{receber, setReceber}}>
          <Recebedor />
      </receberContext.Provider>

      
    </div>
  )
}

export default App