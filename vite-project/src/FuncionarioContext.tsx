import { createContext } from "react";




type FuncionarioContextType = {
    funcionario: []
    setFuncionario: () => void 
}



export const FuncionarioContext = createContext<FuncionarioContextType>({} as FuncionarioContextType)