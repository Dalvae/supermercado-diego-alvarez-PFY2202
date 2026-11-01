import { Link } from 'react-router-dom'
import { useArticulos } from '../context/ArticulosContext.jsx'

function ListaArticulos() {
  const { articulos, eliminarArticulo } = useArticulos()

  return (
    <section>
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Artículos en inventario</h2>
          <p className="text-slate-600">Hay {articulos.length} artículos registrados.</p>
        </div>
        <Link to="/articulos/nuevo" className="px-4 py-2 rounded-lg bg-blue-900 text-white text-sm font-semibold hover:bg-blue-800 whitespace-nowrap">
          + Agregar
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-blue-50 text-blue-900">
            <tr>
              <th className="p-3">Nombre</th>
              <th className="p-3">Marca</th>
              <th className="p-3">Tipo</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {articulos.map((a) => (
              <tr key={a.id} className="border-t border-slate-100">
                <td className="p-3">{a.nombre}</td>
                <td className="p-3">{a.marca}</td>
                <td className="p-3">
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-sm">{a.tipo}</span>
                </td>
                <td className="p-3 text-right">
                  <button onClick={() => eliminarArticulo(a.id)} className="text-sm text-red-700 hover:underline">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {articulos.length === 0 && <p className="mt-3">No hay artículos, agrega uno con el botón de arriba.</p>}
    </section>
  )
}

export default ListaArticulos
