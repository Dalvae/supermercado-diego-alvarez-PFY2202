import { NavLink } from 'react-router-dom'
import { useArticulos } from '../context/ArticulosContext.jsx'
import { IconoCarrito } from './Iconos.jsx'

function MenuArticulos() {
  const { unidadesCarrito } = useArticulos()

  function clase({ isActive }) {
    if (isActive) {
      return 'shrink-0 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap font-semibold bg-blue-100 text-blue-900'
    } else {
      return 'shrink-0 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap text-slate-600 hover:bg-slate-100'
    }
  }

  return (
    <nav className="flex gap-1 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:ml-auto">
      {/* el end es para que no quede marcado listado cuando estoy en /articulos/nuevo o en un detalle */}
      <NavLink to="/articulos" end className={clase}>Listado de artículos</NavLink>
      <NavLink to="/articulos/nuevo" className={clase}>Agregar artículo</NavLink>
      <NavLink to="/carrito" className={clase}>
        <IconoCarrito className="w-4 h-4 inline -mt-0.5 mr-1" />Carrito{unidadesCarrito > 0 && <span className="ml-1 px-1.5 rounded-full bg-blue-900 text-white text-xs">{unidadesCarrito}</span>}
      </NavLink>
    </nav>
  )
}

export default MenuArticulos
