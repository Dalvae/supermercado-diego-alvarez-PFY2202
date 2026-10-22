// tiendas de ejemplo
const tiendas = [
  { id: 1, nombre: 'Sucursal Centro', direccion: 'Av. Principal 123, Santiago', horario: 'Lunes a domingo, 8:00 a 22:00' },
  { id: 2, nombre: 'Sucursal Providencia', direccion: 'Calle Los Olmos 456, Providencia', horario: 'Lunes a domingo, 9:00 a 21:00' },
  { id: 3, nombre: 'Sucursal Maipu', direccion: 'Camino a Rinconada 789, Maipu', horario: 'Lunes a sabado, 9:00 a 20:00' },
]

function NuestrasTiendas() {
  return (
    <section>
      <h2>Nuestras tiendas</h2>
      <p>Visitanos en cualquiera de nuestras sucursales.</p>

      <div className="tiendas">
        {tiendas.map((t) => (
          <div className="tienda" key={t.id}>
            <h3>{t.nombre}</h3>
            <p>{t.direccion}</p>
            <p>{t.horario}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NuestrasTiendas
