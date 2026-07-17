import { createContext } from "react";




 type UsuarioContextType = {
    nome: string
    idade: number
}



export const TemaContext = createContext<UsuarioContextType>({} as UsuarioContextType)