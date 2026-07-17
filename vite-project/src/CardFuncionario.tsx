type Funcionarios = {
     id?: number,
    nome: string,
    cargo: string,
    salario: number
}


type Props = {
    funcionario: Funcionarios
}


const CardFuncionario = ({funcionario}: Props) => {
  return (
    <div>
        <h3>{funcionario.nome} - {funcionario.cargo} - {funcionario.salario} - {funcionario.id}</h3>
    </div>
  )
}

export default CardFuncionario