import React, { useState } from 'react'

const App = () => {
const [tarefas, setTarefas] = useState<string[]>(['cu'])


  return (
    <div>

        <h1>titulo</h1>
        

        {tarefas.length === 0 ? (
          <p>nenhuma tarefa registrada</p>
        ) : (
          tarefas.map((tarefa, index) => (
            <p key={index}>{tarefa}</p>
          ))
        )}
    </div>
  )
}

export default App