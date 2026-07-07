export type ProdutoType = {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
  precoXEstoque?: number
  precoinduvidual?: number
};

type ProdutoProps = ProdutoType & {
  onRemover: (id: number) => void;
};

const Produto = ({
  id,
  nome,
  preco,
  estoque,
  onRemover,
  precoinduvidual,
}: ProdutoProps) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
      <p>Estoque: {estoque}</p>
      <p>Valor do produto vezes a quantidade dele disponivel no estoque {precoinduvidual}</p>


      <button onClick={() => onRemover(id)}>
        Remover
      </button>



      <hr />
    </div>
  );
};

export default Produto;