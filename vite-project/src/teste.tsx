import React, { useState } from 'react'

type Produto = {
  id: number
  nome: string
  preco: number
}

const App = () => {

const [product, setProduct] = useState<Produto[]>([{
  id: 2893839389,
  nome: 'TV',
  preco: 1200
},
{
  id: 32525522112,
  nome: 'geladeira',
  preco: 2000
}
])

  return (
    <div>
        {product.map((t, index) => (
          <div key={index}>
              <p>{t.id} {t.nome} {t.preco}</p>
          </div>
        ))}
    </div>
  )
}

export default App