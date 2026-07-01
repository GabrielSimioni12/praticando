type Produto = {
  nome: string
}

type Props = {
  produtos: Produto[]
}

const Produtos = ({ produtos }: Props) => {
  return (
    <div>
      <h1>PRODUTOS</h1>

      {produtos.map((produto, index) => (
        <p key={index}>{produto.nome}</p>
      ))}
    </div>
  )
}

export default Produtos