import { useState } from "react";

function App() {
  const [mostrar, setMostrar] = useState(false);

  function toggle() {
    setMostrar(!mostrar);
  }

  return (
    <div>
      <button onClick={toggle}>
        {mostrar ? "Esconder" : "Mostrar"}
      </button>

      {mostrar && <p>Olá React</p>}
    </div>
  );
}

export default App;