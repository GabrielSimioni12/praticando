import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produto from './teste.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Produto mouse={170.00} teclado={300} monitor={500} perifericos='meus perifericos'   />
  </StrictMode>,
)
