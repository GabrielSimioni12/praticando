import React, { useState } from 'react'
import { TemaContext } from './TemaContext'
import Header from './Header'
import Perfil from './Perfil'
import Footer from './Footer'


const App = () => {

const [nome] = useState('Gabriel')
const [idade] = useState(19)



  return (
    <div>
        <TemaContext.Provider value={{nome, idade}}>
            <Header />
            <Perfil />
            <Footer />
        </TemaContext.Provider>
    </div>
  )
}

export default App