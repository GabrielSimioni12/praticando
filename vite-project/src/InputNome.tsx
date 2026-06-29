type props = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

const InputNome = ({value, onChange}: props) => {
  return (
    <div>
        <input
        placeholder="digite aqui"
        value={value}
        onChange={onChange}
         />
    </div>
  )
}

export default InputNome