import { createContext, useContext, useReducer } from 'react'

// estado global de los articulos, lo uso con context + useReducer como en el ejemplo avanzado de la guia
// asi el formulario y la tabla ven la misma lista sin pasar props por todos lados

const ArticulosContext = createContext(null)

// algunos para que la tabla no parta vacia
const iniciales = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', marca: 'Tucapel', tipo: 'Abarrotes' },
  { id: 2, nombre: 'Leche entera (1 L)', marca: 'Colun', tipo: 'Lácteos' },
  { id: 3, nombre: 'Café molido (250 g)', marca: 'Nescafé', tipo: 'Abarrotes' },
  { id: 4, nombre: 'Detergente (3 L)', marca: 'Omo', tipo: 'Limpieza' },
]

export const tipos = ['Abarrotes', 'Lácteos', 'Panadería', 'Frutas y verduras', 'Bebidas', 'Limpieza', 'Otros']

function reducer(articulos, accion) {
  switch (accion.type) {
    case 'agregar':
      // el id es el ultimo + 1, no hay backend todavia
      return [...articulos, { ...accion.articulo, id: articulos.length > 0 ? articulos[articulos.length - 1].id + 1 : 1 }]
    case 'eliminar':
      return articulos.filter((a) => a.id !== accion.id)
    default:
      return articulos
  }
}

export function ArticulosProvider({ children }) {
  const [articulos, dispatch] = useReducer(reducer, iniciales)

  function agregarArticulo(articulo) {
    dispatch({ type: 'agregar', articulo })
  }

  function eliminarArticulo(id) {
    dispatch({ type: 'eliminar', id })
  }

  return (
    <ArticulosContext.Provider value={{ articulos, agregarArticulo, eliminarArticulo }}>
      {children}
    </ArticulosContext.Provider>
  )
}

// para no importar useContext y el contexto en cada pagina
export function useArticulos() {
  return useContext(ArticulosContext)
}
