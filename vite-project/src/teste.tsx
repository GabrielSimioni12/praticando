import { useState } from "react";

function App() {
  const [input, setInput] = useState("")

function receba(e) {
  setInput(e.target.value)
}
  return(
      <div>
          <input
              type="text"
              value={input}
              onChange={receba}
              placeholder="digite algo!"
          />

          <p> voce digitou: {input}</p>
      </div>
  )
}
  export default App