import { Link } from 'react-router-dom'
import { pesos } from '../datos.js'
import { Stock, Dato } from './Etiquetas.jsx'
import { IconoMas, IconoMenos } from './Iconos.jsx'

export const columnasCarrito = 'md:grid-cols-[2fr_1fr_1fr_1fr_1fr]'

const claseBoton = 'w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed'

function CarritoItem({ item, onCambiar }) {
  return (
    <li className={`grid grid-cols-2 gap-x-4 gap-y-2 p-4 md:p-3 md:items-center border-t border-slate-100 ${columnasCarrito}`}>
      <div className="col-span-2 md:col-span-1">
        <Link to={`/articulos/${item.id}`} className="font-semibold text-blue-900 hover:underline">{item.nombre}</Link>
        <div className="text-sm text-slate-500">{item.marca}</div>
      </div>
      <Dato etiqueta="Precio">{pesos(item.precio)}</Dato>
      <Dato etiqueta="Cantidad" className="row-start-3 md:row-start-auto">
        <div className="flex items-center gap-2 md:justify-center">
          <button onClick={() => onCambiar(item.id, -1)} title="Quitar uno" className={claseBoton}><IconoMenos className="w-4 h-4" /></button>
          <span className="w-6 text-center font-semibold">{item.cantidad}</span>
          {/* si el inventario quedo en 0 no deja sumar mas */}
          <button onClick={() => onCambiar(item.id, 1)} disabled={item.stock <= 0} title="Agregar uno" className={claseBoton}><IconoMas className="w-4 h-4" /></button>
        </div>
      </Dato>
      <Dato etiqueta="Subtotal" className="font-semibold md:font-normal">{pesos(item.precio * item.cantidad)}</Dato>
      <Dato etiqueta="Queda en stock">
        <Stock cantidad={item.stock} />
      </Dato>
    </li>
  )
}

export default CarritoItem
