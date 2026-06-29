type props = {
  nome: string
  cargo: string 
  salario: number
}

const UsuarioCard = ({nome, cargo, salario}: props) => {
  return (
    <div>
        <p>{nome}</p>
        <p>{cargo}</p>
        <p>{salario}</p>
    </div>

  )
}

export default UsuarioCard