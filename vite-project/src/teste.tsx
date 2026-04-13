import { useState } from "react";

export default function InputTarefas() {
  const [input, setInput] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  function adicionarTarefa() {
    if (input.trim() === "") return;

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="escreva suas tarefas"
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}