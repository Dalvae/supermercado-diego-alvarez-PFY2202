import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import articulosIniciales from '../articulos.json'

const ArticulosContext = createContext(null)

// el carrito es una lista de { id, cantidad }, los datos del articulo se buscan en articulos por el id
const estadoInicial = { articulos: articulosIniciales, carrito: [] }

// el estado se guarda en localStorage, el json es solo el punto de partida
const CLAVE_GUARDADO = 'supermercado-belen'

function cargarEstado() {
  const guardado = localStorage.getItem(CLAVE_GUARDADO)
  return guardado ? JSON.parse(guardado) : estadoInicial
}

function cambiarStock(articulos, id, delta) {
  return articulos.map((a) => (a.id === id ? { ...a, stock: a.stock + delta } : a))
}

function reducer(estado, accion) {
  const { articulos, carrito } = estado
  switch (accion.type) {
    case 'agregar': {
      const id = articulos.length > 0 ? articulos[articulos.length - 1].id + 1 : 1
      return { ...estado, articulos: [...articulos, { ...accion.articulo, id }] }
    }
    case 'eliminar':
      return {
        articulos: articulos.filter((a) => a.id !== accion.id),
        carrito: carrito.filter((c) => c.id !== accion.id),
      }
    case 'agregarAlCarrito': {
      // sumar al carrito es restar del inventario, si no hay stock no pasa nada
      const articulo = articulos.find((a) => a.id === accion.id)
      if (!articulo || articulo.stock <= 0) return estado
      const yaEsta = carrito.some((c) => c.id === accion.id)
      const nuevoCarrito = yaEsta
        ? carrito.map((c) => (c.id === accion.id ? { ...c, cantidad: c.cantidad + 1 } : c))
        : [...carrito, { id: accion.id, cantidad: 1 }]
      return { articulos: cambiarStock(articulos, accion.id, -1), carrito: nuevoCarrito }
    }
    case 'cambiarCantidad': {
      const articulo = articulos.find((a) => a.id === accion.id)
      const linea = carrito.find((c) => c.id === accion.id)
      if (!articulo || !linea) return estado
      if (accion.delta > 0 && articulo.stock <= 0) return estado
      const nuevaCantidad = linea.cantidad + accion.delta
      const nuevoCarrito =
        nuevaCantidad <= 0
          ? carrito.filter((c) => c.id !== accion.id)
          : carrito.map((c) => (c.id === accion.id ? { ...c, cantidad: nuevaCantidad } : c))
      return { articulos: cambiarStock(articulos, accion.id, -accion.delta), carrito: nuevoCarrito }
    }
    case 'restablecer':
      return estadoInicial
    default:
      return estado
  }
}

export function ArticulosProvider({ children }) {
  const [estado, dispatch] = useReducer(reducer, null, cargarEstado)

  useEffect(() => {
    localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(estado))
  }, [estado])

  // useMemo para no armar el objeto de nuevo en cada render
  const valor = useMemo(() => {
    const carrito = estado.carrito.map((c) => ({ ...estado.articulos.find((a) => a.id === c.id), cantidad: c.cantidad }))
    return {
      articulos: estado.articulos,
      carrito,
      totalCarrito: carrito.reduce((suma, c) => suma + c.precio * c.cantidad, 0),
      unidadesCarrito: carrito.reduce((suma, c) => suma + c.cantidad, 0),
      agregarArticulo: (articulo) => dispatch({ type: 'agregar', articulo }),
      eliminarArticulo: (id) => dispatch({ type: 'eliminar', id }),
      agregarAlCarrito: (id) => dispatch({ type: 'agregarAlCarrito', id }),
      cambiarCantidad: (id, delta) => dispatch({ type: 'cambiarCantidad', id, delta }),
      restablecer: () => dispatch({ type: 'restablecer' }),
    }
  }, [estado])

  return <ArticulosContext.Provider value={valor}>{children}</ArticulosContext.Provider>
}

export function useArticulos() {
  return useContext(ArticulosContext)
}
