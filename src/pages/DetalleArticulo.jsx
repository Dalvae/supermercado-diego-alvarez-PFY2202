import { Link, useParams } from 'react-router-dom'
import { useArticulos } from '../context/ArticulosContext.jsx'
import { pesos } from '../datos.js'
import Boton from '../components/Boton.jsx'
import { Categoria, Stock } from '../components/Etiquetas.jsx'
import { IconoCarrito } from '../components/Iconos.jsx'

function DetalleArticulo() {
  const { id } = useParams()
  const { articulos, carrito, agregarAlCarrito } = useArticulos()

  // useParams devuelve string, por eso el Number
  const articulo = articulos.find((a) => a.id === Number(id))
  const enCarrito = carrito.find((c) => c.id === Number(id))

  if (!articulo) {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-2">Artículo no encontrado</h2>
        <p className="text-slate-600 mb-4">No existe un artículo con id {id}.</p>
        <Link to="/articulos" className="text-blue-900 hover:underline">← Volver al listado</Link>
      </section>
    )
  }

  const sinStock = articulo.stock <= 0

  return (
    <section>
      <Link to="/articulos" className="text-sm text-blue-900 hover:underline">← Volver al listado</Link>

      <div className="mt-3 bg-white border border-slate-200 rounded-lg p-5 max-w-lg">
        <Categoria nombre={articulo.categoria} />
        <h2 className="text-2xl font-bold mt-2">{articulo.nombre}</h2>
        <p className="text-slate-600">{articulo.marca}</p>

        <dl className="grid grid-cols-2 gap-3 mt-4 text-sm">
          <dt className="text-slate-500">Precio</dt>
          <dd className="font-semibold text-lg">{pesos(articulo.precio)}</dd>
          <dt className="text-slate-500">Stock disponible</dt>
          <dd><Stock cantidad={articulo.stock} className="font-semibold text-lg" /></dd>
          <dt className="text-slate-500">En el carrito</dt>
          <dd className="font-semibold text-lg">{enCarrito ? enCarrito.cantidad : 0}</dd>
        </dl>

        <div className="flex flex-wrap gap-3 mt-5">
          <Boton onClick={() => agregarAlCarrito(articulo.id)} disabled={sinStock}>
            <IconoCarrito />
            {sinStock ? 'Sin stock' : 'Agregar al carrito'}
          </Boton>
          {enCarrito && <Boton to="/carrito" tipo="secundario">Ver carrito</Boton>}
        </div>
        <p className="text-xs text-slate-500 mt-3">Cada unidad que se agrega al carrito se descuenta del inventario.</p>
      </div>
    </section>
  )
}

export default DetalleArticulo
