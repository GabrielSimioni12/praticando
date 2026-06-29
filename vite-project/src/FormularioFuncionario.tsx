import React from 'react'

type Props = {
  nome: string
  cargo: string
  onNomeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCargoChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSalvar: () => void
}

const FormularioFuncionario = ({
  nome,
  cargo,
  onNomeChange,
  onCargoChange,
  onSalvar
}: Props) => {
  return (
    <div>
      <input
        placeholder="Nome"
        value={nome}
        onChange={onNomeChange}
      />

      <input
        placeholder="Cargo"
        value={cargo}
        onChange={onCargoChange}
      />

      <button onClick={onSalvar}>
        Salvar
      </button>
    </div>
  )
}

export default FormularioFuncionario