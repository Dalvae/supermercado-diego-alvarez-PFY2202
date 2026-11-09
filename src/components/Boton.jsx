import { Link } from 'react-router-dom'

// con "to" es un Link, si no es un button
const estilos = {
  primario: 'bg-blue-900 text-white hover:bg-blue-800 disabled:bg-slate-300 disabled:cursor-not-allowed',
  secundario: 'border border-blue-900 text-blue-900 hover:bg-blue-50',
  peligro: 'bg-red-700 text-white hover:bg-red-600',
}

function Boton({ to, tipo = 'primario', className = '', children, ...resto }) {
  const clase = `inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${estilos[tipo]} ${className}`

  if (to) {
    return <Link to={to} className={clase}>{children}</Link>
  }
  return <button className={clase} {...resto}>{children}</button>
}

export default Boton
