import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { ArticulosProvider } from './context/ArticulosContext.jsx'

// basename para que las rutas funcionen en gh-pages
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ArticulosProvider>
      <App />
    </ArticulosProvider>
  </BrowserRouter>
)
