// tiendas de ejemplo
const tiendas = [
  { id: 1, nombre: 'Sucursal Centro', direccion: 'Av. Principal 123, Santiago', horario: 'Lunes a domingo, 8:00 a 22:00' },
  { id: 2, nombre: 'Sucursal Providencia', direccion: 'Calle Los Olmos 456, Providencia', horario: 'Lunes a domingo, 9:00 a 21:00' },
  { id: 3, nombre: 'Sucursal Maipu', direccion: 'Camino a Rinconada 789, Maipu', horario: 'Lunes a sabado, 9:00 a 20:00' },
]

function NuestrasTiendas() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">Nuestras tiendas</h2>
      <p className="mb-4">Visitanos en cualquiera de nuestras sucursales.</p>

      <div className="flex flex-wrap gap-4">
        {tiendas.map((t) => (
          <div className="flex-1 basis-64 bg-white border border-gray-200 rounded-md px-4 py-3" key={t.id}>
            <h3 className="text-lg font-bold text-green-700 mb-2">{t.nombre}</h3>
            <p>{t.direccion}</p>
            <p>{t.horario}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NuestrasTiendas
