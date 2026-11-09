import { Link } from 'react-router-dom'
import { pesos } from '../datos.js'
import { Categoria, Stock, Dato } from './Etiquetas.jsx'
import Boton from './Boton.jsx'
import { IconoCarrito, IconoBasura } from './Iconos.jsx'

export const columnasArticulo = 'md:grid-cols-[2fr_1fr_1fr_1fr_4rem_11rem]'

function ArticuloItem({ articulo, onAgregar, onEliminar }) {
  return (
    <li className={`grid grid-cols-2 gap-x-4 gap-y-2 p-4 md:p-3 md:items-center border-t border-slate-100 hover:bg-slate-50 ${columnasArticulo}`}>
      <div className="col-span-2 md:col-span-1">
        <Link to={`/articulos/${articulo.id}`} className="font-semibold text-blue-900 hover:underline">
          {articulo.nombre}
        </Link>
        <div className="text-sm text-slate-500 md:hidden">{articulo.marca}</div>
      </div>
      <div className="hidden md:block">{articulo.marca}</div>
      <Dato etiqueta="Categoría">
        <Categoria nombre={articulo.categoria} />
      </Dato>
      <Dato etiqueta="Precio">{pesos(articulo.precio)}</Dato>
      <Dato etiqueta="Stock">
        <Stock cantidad={articulo.stock} />
      </Dato>
      <div className="col-span-2 md:col-span-1 flex items-center gap-3 md:justify-end">
        <Boton onClick={() => onAgregar(articulo.id)} disabled={articulo.stock <= 0} className="px-3 py-1.5" title="Agregar al carrito">
          <IconoCarrito />
          {articulo.stock <= 0 ? 'Sin stock' : 'Al carrito'}
        </Boton>
        <button onClick={() => onEliminar(articulo)} title="Eliminar" className="p-1.5 rounded-lg text-red-700 hover:bg-red-50">
          <IconoBasura />
        </button>
      </div>
    </li>
  )
}

export default ArticuloItem
