import { Link, useLocation } from 'react-router-dom'

function Menu() {
  const location = useLocation()

  // para marcar en que pagina estoy
  function claseLink(ruta) {
    if (location.pathname === ruta) {
      return 'px-3 py-1.5 rounded bg-green-400 text-green-950 font-bold'
    } else {
      return 'px-3 py-1.5 rounded text-white hover:bg-green-600'
    }
  }

  return (
    <nav className="fixed bottom-0 inset-x-0 flex justify-around bg-green-900 py-3.5">
      <Link to="/" className={claseLink('/')}>Inicio</Link>
      <Link to="/quienes-somos" className={claseLink('/quienes-somos')}>Quienes somos</Link>
      <Link to="/tiendas" className={claseLink('/tiendas')}>Nuestras tiendas</Link>
    </nav>
  )
}

export default Menu
