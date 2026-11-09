import { useArticulos } from '../context/ArticulosContext.jsx'
import { pesos } from '../datos.js'
import CarritoItem, { columnasCarrito } from '../components/CarritoItem.jsx'
import Boton from '../components/Boton.jsx'

function Carrito() {
  const { carrito, totalCarrito, unidadesCarrito, cambiarCantidad } = useArticulos()

  if (carrito.length === 0) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-1">Carrito</h2>
        <p className="text-slate-600 mb-4">Todavía no hay nada en el carrito. Los artículos se agregan desde el listado con el botón "Al carrito" o desde el detalle de cada uno.</p>
        <Boton to="/articulos">Ir al listado de artículos</Boton>
      </section>
    )
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-1">Carrito</h2>
      <p className="text-slate-600 mb-4">{unidadesCarrito} unidades en {carrito.length} artículos.</p>

      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className={`hidden md:grid gap-x-4 p-3 bg-blue-50 text-blue-900 font-semibold ${columnasCarrito}`}>
          <span>Artículo</span>
          <span>Precio</span>
          <span className="text-center">Cantidad</span>
          <span>Subtotal</span>
          <span>Queda en stock</span>
        </div>
        <ul>
          {carrito.map((c) => (
            <CarritoItem key={c.id} item={c} onCambiar={cambiarCantidad} />
          ))}
        </ul>
        <div className="flex justify-between p-4 md:p-3 border-t border-slate-200 bg-slate-50 font-bold">
          <span>Total</span>
          <span>{pesos(totalCarrito)}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
        <p className="text-sm text-slate-500">Si bajas la cantidad a 0 el artículo sale del carrito y vuelve al inventario.</p>
        <Boton to="/articulos" tipo="secundario">Seguir agregando</Boton>
      </div>
    </section>
  )
}

export default Carrito
