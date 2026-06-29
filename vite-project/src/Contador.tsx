type Props = {
    Aumentar: () => void 
    Diminuir: () => void
    Resetar: () => void 
}

const Contador = ({Aumentar, Diminuir, Resetar}: Props) => {
  return (
    <div>
        <button onClick={Aumentar}>+</button>
        <button onClick={Diminuir}>-</button>
        <button onClick={Resetar}>RESETAR</button>
    </div>
  )
}

export default Contador