
type Produto = {
  mouse: number
  teclado: number 
  monitor: number
  perifericos: string
}


const Produto = ({mouse, teclado, monitor, perifericos}: Produto)  => {

  return ( 
      <div>
        <h1>{perifericos}</h1>
        <p>{mouse}</p>
        <p>{teclado}</p>
        <p>{monitor}</p>

        
      </div>
  )
}

export default Produto



