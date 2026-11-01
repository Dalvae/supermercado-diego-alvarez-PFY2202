import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useArticulos, tipos } from '../context/ArticulosContext.jsx'

const vacio = { nombre: '', marca: '', tipo: '' }

function AgregarArticulo() {
  const { agregarArticulo } = useArticulos()
  const navigate = useNavigate()
  const [form, setForm] = useState(vacio)
  const [error, setError] = useState('')

  // un solo onChange para los tres campos, usa el name del input
  function cambiar(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function guardar(e) {
    e.preventDefault()
    if (form.nombre.trim() === '' || form.marca.trim() === '' || form.tipo === '') {
      setError('Completa nombre, marca y tipo antes de guardar.')
      return
    }
    agregarArticulo({ nombre: form.nombre.trim(), marca: form.marca.trim(), tipo: form.tipo })
    setForm(vacio)
    setError('')
    // despues de guardar lo mando al listado para que vea que quedo
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
          <label htmlFor="tipo" className="block text-sm font-semibold mb-1">Tipo de producto</label>
          <select id="tipo" name="tipo" className={claseInput} value={form.tipo} onChange={cambiar}>
            <option value="">Selecciona un tipo</option>
            {tipos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-700">{error}</p>}

        <button type="submit" className="w-full py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800">
          Guardar artículo
        </button>
      </form>
    </section>
  )
}

export default AgregarArticulo
