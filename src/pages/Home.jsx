import { useState } from 'react'

// datos de inventario de ejemplo, no hay backend todavia
const productos = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', categoria: 'Abarrotes', stock: 120, precio: 1290 },
  { id: 2, nombre: 'Harina sin polvos (1 kg)', categoria: 'Abarrotes', stock: 95, precio: 1190 },
  { id: 3, nombre: 'Aceite vegetal (1 L)', categoria: 'Abarrotes', stock: 8, precio: 2490 },
  { id: 4, nombre: 'Leche entera (1 L)', categoria: 'Lácteos', stock: 60, precio: 1050 },
  { id: 5, nombre: 'Yogurt natural (150 g)', categoria: 'Lácteos', stock: 5, precio: 450 },
  { id: 6, nombre: 'Pan amasado (kg)', categoria: 'Panadería', stock: 40, precio: 2200 },
  { id: 7, nombre: 'Papas (malla 5 kg)', categoria: 'Frutas y verduras', stock: 30, precio: 4990 },
  { id: 8, nombre: 'Manzanas (1 kg)', categoria: 'Frutas y verduras', stock: 70, precio: 1590 },
  { id: 9, nombre: 'Café molido (250 g)', categoria: 'Abarrotes', stock: 22, precio: 4590 },
  { id: 10, nombre: 'Detergente (3 L)', categoria: 'Limpieza', stock: 12, precio: 6990 },
]

// saca tildes y mayusculas, asi "lacteos" encuentra "Lácteos"
function normalizar(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}

function Home() {
  const [busqueda, setBusqueda] = useState('')

  // busca por nombre o por categoria
  const filtrados = productos.filter(function (p) {
    const b = normalizar(busqueda)
    return normalizar(p.nombre).includes(b) || normalizar(p.categoria).includes(b)
  })

  return (
    <section>
      <h2 className="text-2xl font-bold mb-1">Inventario</h2>
      <p className="text-slate-600">Stock de los productos del supermercado. Los que tienen poco stock salen en rojo.</p>

      <input
        type="text"
        className="w-full max-w-sm px-3 py-2 my-4 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-800"
        placeholder="Buscar por producto o categoría..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="p-3">Producto</th>
              <th className="p-3">Categoría</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Precio</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((p) => (
              <tr key={p.id} className="border-t border-slate-100">
                <td className="p-3">{p.nombre}</td>
                <td className="p-3">{p.categoria}</td>
                <td className={'p-3 ' + (p.stock < 10 ? 'text-red-700 font-bold' : '')}>{p.stock}</td>
                <td className="p-3">${p.precio.toLocaleString('es-CL')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtrados.length === 0 && <p className="mt-3">No se encontraron productos.</p>}
    </section>
  )
}

export default Home
