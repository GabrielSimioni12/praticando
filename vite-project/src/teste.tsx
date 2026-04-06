import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  const adicionar = () => {
    if (item.trim() === "") return;
    setLista([...lista, item]);
    setItem("");
  };

  return (
    <div>
      <h2>Itens: {lista.length}</h2>

      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {lista.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;