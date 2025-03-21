import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Ronaldo')

  return (
    <div>
      <h3>PIZZARIA 2E</h3>

      <input 
      className = "nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />
    <button
      className="botao"
      onClick={()=>{alert (nome)}}
    >
      CLICA AQUI
    </button>

    </div>

  )
}

export default App