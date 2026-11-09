export function Categoria({ nombre }) {
  return <span className="px-2 py-0.5 rounded-full bg-slate-100 text-sm whitespace-nowrap">{nombre}</span>
}

export function Stock({ cantidad, className = '' }) {
  return <span className={(cantidad < 10 ? 'text-red-700 font-bold ' : '') + className}>{cantidad}</span>
}

// en celular cada dato lleva su etiqueta arriba, en md ya esta el encabezado
export function Dato({ etiqueta, children, className = '' }) {
  return (
    <div className={className}>
      <span className="block text-xs text-slate-500 md:hidden">{etiqueta}</span>
      {children}
    </div>
  )
}
