import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import NuestrasTiendas from './pages/NuestrasTiendas.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Supermercado Don Diego</h1>
        <p>Gestion de inventario</p>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/tiendas" element={<NuestrasTiendas />} />
          {/* esta va al final como decia la guia */}
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>

      {/* aca puse el menu abajo como pedia el enunciado */}
      <Menu />
    </div>
  )
}

export default App
