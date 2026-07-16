import React, { createContext } from "react";



type nomeContext = {
    nome: string
    setNome: React.Dispatch<React.SetStateAction<string>>
}


type receberContextType = {
    receber: number 
    setReceber: React.Dispatch<React.SetStateAction<number>>
}

type temaContextType = {
    tema: boolean
    setTema: React.Dispatch<React.SetStateAction<boolean>>
}

export const nomeContext = createContext<nomeContext>({} as nomeContext)
export const receberContext = createContext<receberContextType>({} as receberContextType)
export const temaContext = createContext<temaContextType>({} as temaContextType)