import { useState } from "react"
import Perfil from "./components/perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
