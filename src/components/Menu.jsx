import { NavLink } from 'react-router-dom'

const links = [
  { ruta: '/articulos', texto: 'Inventario' },
  { ruta: '/quienes-somos', texto: 'Quiénes somos' },
  { ruta: '/tiendas', texto: 'Nuestra tienda' },
]

function Menu() {
  function clase({ isActive }) {
    if (isActive) {
      return 'px-3 sm:px-4 py-2 rounded-full text-sm whitespace-nowrap font-semibold bg-blue-900 text-white'
    } else {
      return 'px-3 sm:px-4 py-2 rounded-full text-sm whitespace-nowrap text-slate-600 hover:bg-slate-100'
    }
  }

  return (
    <nav className="fixed bottom-4 inset-x-0 flex justify-center px-4">
      <div className="flex gap-1 bg-white/90 backdrop-blur border border-slate-200 shadow-lg rounded-full p-1.5">
        {links.map((l) => (
          <NavLink key={l.ruta} to={l.ruta} end className={clase}>
            {l.texto}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Menu
