import { useEffect, useMemo, useState } from "react";
import Produto, { type ProdutoType } from "./produto";

const App = () => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([
    {
      id: 1,
      nome: "Notebook",
      preco: 4500,
      estoque: 8,
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      preco: 250,
      estoque: 25,
    },
    {
      id: 3,
      nome: "Teclado Mecânico",
      preco: 420,
      estoque: 15,
    },
    {
      id: 4,
      nome: "Monitor 27''",
      preco: 1800,
      estoque: 5,
    },
    {
      id: 5,
      nome: "Headset",
      preco: 380,
      estoque: 18,
    },
  ]);

  const [novoProduto, setNovoProduto] = useState("");


  const adicionarProduto = () => {
    if (!novoProduto.trim()) return;

    setProdutos([
      ...produtos,
      {
        id: Date.now(),
        nome: novoProduto,
        preco: 0,
        estoque: 0,
      },
    ]);

    setNovoProduto("");
  };

  const removerProduto = (id: number) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };


const TotalProduto = useMemo(() => {
  return produtos.reduce((acc, produto) => {
    return acc + produto.preco * produto.estoque
  }, 0)
}, [produtos])


const ProdutoMaisCaro = useMemo((): ProdutoType | undefined => {
  if (produtos.length === 0) return undefined;
  return produtos.reduce((max, produto) => (produto.preco > max.preco ? produto : max));
}, [produtos]);

const ProdutoMaisBarato = useMemo((): ProdutoType | undefined => {
  if (produtos.length === 0) return undefined;
  return produtos.reduce((min, produto) => (produto.preco < min.preco ? produto : min));
}, [produtos]);



useEffect(() => {
  console.clear();

  console.log("==========");
  console.log("INPUT:", novoProduto);
  console.log("==========");
}, [novoProduto]);
  return (
    <div>
      <input
        type="text"
        placeholder="Digite um produto"
        value={novoProduto}
        onChange={(e) => setNovoProduto(e.target.value)}
      />

      <button onClick={adicionarProduto}>
        Adicionar
      </button>

      <hr />

      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          estoque={produto.estoque}
          onRemover={removerProduto}
         precoinduvidual={produto.preco * produto.estoque}
          
        />
      ))}




      <h2>quantidade de produtos</h2>
      <h1>{produtos.length}</h1>
      <h1>VALOR TOTAL DO SOMADO {TotalProduto}</h1>
      <h3>produto mais caro {ProdutoMaisCaro ? `${ProdutoMaisCaro.nome} (R$ ${ProdutoMaisCaro.preco})` : '—'}</h3>
      <h3>produto mais barato {ProdutoMaisBarato?.nome} - {ProdutoMaisCaro?.preco}</h3>
    </div>
  );
};

export default App;