import { useState } from 'react'

// datos de inventario de ejemplo, no hay backend todavia
const productos = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', categoria: 'Abarrotes', stock: 120, precio: 1290 },
  { id: 2, nombre: 'Fideos spaghetti (400 g)', categoria: 'Abarrotes', stock: 85, precio: 990 },
  { id: 3, nombre: 'Aceite vegetal (1 L)', categoria: 'Abarrotes', stock: 8, precio: 2490 },
  { id: 4, nombre: 'Leche entera (1 L)', categoria: 'Lacteos', stock: 60, precio: 1050 },
  { id: 5, nombre: 'Yogurt natural (150 g)', categoria: 'Lacteos', stock: 5, precio: 450 },
  { id: 6, nombre: 'Pan de molde', categoria: 'Panaderia', stock: 40, precio: 1890 },
  { id: 7, nombre: 'Manzanas (1 kg)', categoria: 'Frutas y verduras', stock: 70, precio: 1590 },
  { id: 8, nombre: 'Detergente (3 L)', categoria: 'Limpieza', stock: 12, precio: 6990 },
]

function Home() {
  const [busqueda, setBusqueda] = useState('')

  // filtro por nombre
  const filtrados = productos.filter(function (p) {
    return p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  })

  return (
    <section>
      <h2>Inventario</h2>
      <p>Revisa el stock de los productos del supermercado. Los que tienen poco stock salen en rojo.</p>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoria</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.categoria}</td>
              <td className={p.stock < 10 ? 'poco-stock' : ''}>{p.stock}</td>
              <td>${p.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtrados.length === 0 && <p>No se encontraron productos.</p>}
    </section>
  )
}

export default Home
