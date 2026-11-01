# supermercado - inventario

Formativos de Desarrollo Frontend II (PFY2202). Es un sitio react de inventario para el Supermercado Belén de Chonchi, hecho con vite, react router v6 y tailwind para los estilos.

Tiene un home con la tabla de productos (los datos estan en un array en `src/pages/Home.jsx`) y un menu abajo para ir a "Quienes somos" y "Nuestra tienda". La busqueda filtra por nombre o categoria y no le importan mayusculas ni tildes.

### semana 2

- menu nuevo arriba con dos paginas: listado de articulos y agregar articulo
- estado global con context + useReducer en `src/context/ArticulosContext.jsx` (nombre, marca y tipo de cada articulo)
- formulario para agregar articulos, valida que esten los tres campos y despues te manda al listado
- tabla con todos los articulos del inventario, tambien se pueden eliminar
- estilos con tailwind css (ya venia de la semana 1)

ojo que no hay backend, si recargas la pagina vuelve a la lista inicial

## como correrlo

```
npm install
npm run dev
```

y para ver que compile: `npm run build`

## rutas

- `/` inicio
- `/quienes-somos`
- `/tiendas`
- `/articulos` listado de articulos
- `/articulos/nuevo` formulario para agregar
- cualquier otra muestra pagina no encontrada
