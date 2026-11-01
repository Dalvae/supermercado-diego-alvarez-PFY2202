import { NavLink } from 'react-router-dom'

// semana 2: menu nuevo arriba para las dos paginas de articulos
function MenuArticulos() {
  function clase({ isActive }) {
    if (isActive) {
      return 'px-3 py-1.5 rounded-lg text-sm font-semibold bg-blue-100 text-blue-900'
    } else {
      return 'px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100'
    }
  }

  return (
    <nav className="flex gap-1 sm:ml-auto">
      {/* el end es para que no quede marcado listado cuando estoy en /articulos/nuevo */}
      <NavLink to="/articulos" end className={clase}>Listado de artículos</NavLink>
      <NavLink to="/articulos/nuevo" className={clase}>Agregar artículo</NavLink>
    </nav>
  )
}

export default MenuArticulos
