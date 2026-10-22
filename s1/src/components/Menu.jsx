import { Link, useLocation } from 'react-router-dom'

function Menu() {
  const location = useLocation()

  // para marcar en que pagina estoy
  function claseLink(ruta) {
    if (location.pathname === ruta) {
      return 'activo'
    } else {
      return ''
    }
  }

  return (
    <nav className="menu-inferior">
      <Link to="/" className={claseLink('/')}>Inicio</Link>
      <Link to="/quienes-somos" className={claseLink('/quienes-somos')}>Quienes somos</Link>
      <Link to="/tiendas" className={claseLink('/tiendas')}>Nuestras tiendas</Link>
    </nav>
  )
}

export default Menu
