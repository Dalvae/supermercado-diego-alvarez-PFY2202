import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import NuestrasTiendas from './pages/NuestrasTiendas.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import MenuArticulos from './components/MenuArticulos.jsx'
import ListaArticulos from './pages/ListaArticulos.jsx'
import AgregarArticulo from './pages/AgregarArticulo.jsx'
import DetalleArticulo from './pages/DetalleArticulo.jsx'
import Carrito from './pages/Carrito.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-4">
            {/* el logo trae mucho borde blanco, por eso el scale */}
            <div className="w-16 h-16 overflow-hidden shrink-0">
              <img src={`${import.meta.env.BASE_URL}logo-belen.jpg`} alt="Logo Supermercado Belén" className="w-full h-full object-cover scale-[1.6]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Supermercado Belén</h1>
              <p className="text-sm text-slate-500">Gestión de inventario · Chonchi, Chiloé</p>
            </div>
          </div>
          <MenuArticulos />
        </div>
      </header>

      {/* el pb-28 es para que el menu de abajo no tape el contenido */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-6 pb-28">
        <Routes>
          <Route path="/" element={<Navigate to="/articulos" replace />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/tiendas" element={<NuestrasTiendas />} />
          <Route path="/articulos" element={<ListaArticulos />} />
          <Route path="/articulos/nuevo" element={<AgregarArticulo />} />
          <Route path="/articulos/:id" element={<DetalleArticulo />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>

      <Menu />
    </div>
  )
}

export default App
