export const categorias = ['Abarrotes', 'Lácteos', 'Panadería', 'Frutas y verduras', 'Bebidas', 'Limpieza', 'Otros']

// $1.290 como se escribe aca
export function pesos(monto) {
  return '$' + monto.toLocaleString('es-CL')
}
