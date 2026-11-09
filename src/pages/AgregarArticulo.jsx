import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useArticulos } from '../context/ArticulosContext.jsx'
import { categorias } from '../datos.js'
import Boton from '../components/Boton.jsx'

const vacio = { nombre: '', marca: '', categoria: '', precio: '', stock: '' }

function AgregarArticulo() {
  const { agregarArticulo } = useArticulos()
  const navigate = useNavigate()
  const [form, setForm] = useState(vacio)
  const [error, setError] = useState('')

  // un solo onChange para todos los campos, usa el name del input
  function cambiar(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function guardar(e) {
    e.preventDefault()
    if (form.nombre === '' || form.marca === '' || form.categoria === '') {
      setError('Completa nombre, marca y categoría antes de guardar.')
      return
    }
    const precio = Number(form.precio)
    const stock = Number(form.stock)
    if (form.precio === '' || precio <= 0 || form.stock === '' || stock < 0) {
      setError('El precio tiene que ser mayor a 0 y el stock 0 o más.')
      return
    }
    agregarArticulo({ nombre: form.nombre, marca: form.marca, categoria: form.categoria, precio, stock })
    setForm(vacio)
    setError('')
    navigate('/articulos')
  }

  const claseInput =
    'w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-800'

  return (
    <section>
      <h2 className="text-2xl font-bold mb-1">Agregar artículo</h2>
      <p className="text-slate-600 mb-4">Ingresa un artículo nuevo al inventario.</p>

      <form onSubmit={guardar} className="bg-white border border-slate-200 rounded-lg p-5 max-w-md space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-semibold mb-1">Nombre</label>
          <input id="nombre" name="nombre" type="text" className={claseInput} placeholder="Ej: Fideos spaghetti (400 g)" value={form.nombre} onChange={cambiar} />
        </div>
        <div>
          <label htmlFor="marca" className="block text-sm font-semibold mb-1">Marca</label>
          <input id="marca" name="marca" type="text" className={claseInput} placeholder="Ej: Carozzi" value={form.marca} onChange={cambiar} />
        </div>
        <div>
          <label htmlFor="categoria" className="block text-sm font-semibold mb-1">Categoría</label>
          <select id="categoria" name="categoria" className={claseInput} value={form.categoria} onChange={cambiar}>
            <option value="">Selecciona una categoría</option>
            {categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="precio" className="block text-sm font-semibold mb-1">Precio ($)</label>
            <input id="precio" name="precio" type="number" min="1" className={claseInput} placeholder="Ej: 990" value={form.precio} onChange={cambiar} />
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-semibold mb-1">Stock</label>
            <input id="stock" name="stock" type="number" min="0" className={claseInput} placeholder="Ej: 50" value={form.stock} onChange={cambiar} />
          </div>
        </div>

        {error && <p className="text-sm text-red-700">{error}</p>}

        <Boton type="submit" className="w-full">Guardar artículo</Boton>
      </form>
    </section>
  )
}

export default AgregarArticulo
