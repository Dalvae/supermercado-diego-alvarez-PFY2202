import { useState } from 'react'
import { useArticulos } from '../context/ArticulosContext.jsx'
import { categorias } from '../datos.js'
import ArticuloItem, { columnasArticulo } from '../components/ArticuloItem.jsx'
import Boton from '../components/Boton.jsx'
import Confirmar from '../components/Confirmar.jsx'
import { IconoMas, IconoLupa } from '../components/Iconos.jsx'

function ListaArticulos() {
  const { articulos, agregarAlCarrito, eliminarArticulo, restablecer } = useArticulos()
  const [categoria, setCategoria] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [aEliminar, setAEliminar] = useState(null)

  // los dos filtros se combinan, categoria vacia = todas
  const texto = busqueda.toLowerCase()
  const filtrados = articulos.filter((a) => {
    const pasaCategoria = categoria === '' || a.categoria === categoria
    const pasaTexto = texto === '' || a.nombre.toLowerCase().includes(texto) || a.marca.toLowerCase().includes(texto)
    return pasaCategoria && pasaTexto
  })
  const hayFiltros = categoria !== '' || texto !== ''

  function confirmarEliminar() {
    eliminarArticulo(aEliminar.id)
    setAEliminar(null)
  }

  function limpiarFiltros() {
    setCategoria('')
    setBusqueda('')
  }

  const claseCampo = 'px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-800'

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Artículos en inventario</h2>
          <p className="text-slate-600">
            Mostrando {filtrados.length} de {articulos.length} artículos. Haz clic en el nombre para ver el detalle.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <label htmlFor="busqueda" className="text-sm font-semibold"><IconoLupa className="w-5 h-5 inline -mt-0.5" /> Buscar</label>
          <input
            id="busqueda"
            type="search"
            placeholder="Nombre o marca"
            className={`${claseCampo} flex-1 sm:flex-none sm:w-48`}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <label htmlFor="categoria" className="text-sm font-semibold">Categoría</label>
          <select id="categoria" className={claseCampo} value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Todas</option>
            {categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {hayFiltros && (
            <button onClick={limpiarFiltros} className="text-sm text-blue-900 hover:underline">
              Limpiar
            </button>
          )}
          <Boton to="/articulos/nuevo" className="ml-auto"><IconoMas /> Agregar</Boton>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className={`hidden md:grid gap-x-4 p-3 bg-blue-50 text-blue-900 font-semibold ${columnasArticulo}`}>
          <span>Nombre</span>
          <span>Marca</span>
          <span>Categoría</span>
          <span>Precio</span>
          <span>Stock</span>
          <span></span>
        </div>
        <ul>
          {filtrados.map((a) => (
            <ArticuloItem key={a.id} articulo={a} onAgregar={agregarAlCarrito} onEliminar={setAEliminar} />
          ))}
        </ul>
      </div>

      {filtrados.length === 0 && articulos.length > 0 && (
        <p className="mt-3">
          No hay artículos que coincidan
          {texto !== '' && <> con "{busqueda}"</>}
          {categoria !== '' && <> en la categoría {categoria}</>}.
        </p>
      )}
      {articulos.length === 0 && <p className="mt-3">No hay artículos, agrega uno con el botón de arriba.</p>}

      <Confirmar abierto={aEliminar !== null} titulo="¿Eliminar artículo?" onConfirmar={confirmarEliminar} onCancelar={() => setAEliminar(null)}>
        Se va a eliminar <strong>{aEliminar?.nombre}</strong> del inventario. Si estaba en el carrito también sale de ahí. Esto no se puede deshacer.
      </Confirmar>

      <p className="text-sm text-slate-500 mt-6">
        Los cambios quedan guardados en el navegador.{' '}
        <button onClick={restablecer} className="text-blue-900 hover:underline">Volver a los datos de prueba</button>
      </p>
    </section>
  )
}

export default ListaArticulos
