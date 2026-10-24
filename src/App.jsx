import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import NuestrasTiendas from './pages/NuestrasTiendas.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-green-700 text-white text-center p-4">
        <h1 className="text-3xl font-bold">Supermercado Don Diego</h1>
        <p className="mt-1">Gestion de inventario</p>
      </header>

      {/* el pb-24 es para que el menu fijo no tape el contenido */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-5 pb-24">
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
