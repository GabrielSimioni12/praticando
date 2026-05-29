import React, { useState } from 'react'

const App = () => {

const [itens, setItens] = useState<number[]>([])
const [novo, setNovo] = useState<string>('')

const adiconarNovoId = () => {
  setItens([...itens, Number(novo)])
  setNovo('')
}


  return (
    <div>
      <h1>clique para adiconar um novo ID</h1>
      <input
        type='number'
        placeholder='clique aqui para adicionar um novo ID'
        value={novo}
        onChange={(e) => setNovo((e.target.value))}
      />
      <button onClick={adiconarNovoId}>+</button>

      {itens.map((item, index) => (
        <p key={index}>{item}</p>
      )
    )}


    </div>
  )
}

export default App