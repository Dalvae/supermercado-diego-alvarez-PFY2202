import { useEffect, useRef } from 'react'
import Boton from './Boton.jsx'
import { IconoAlerta } from './Iconos.jsx'

function Confirmar({ abierto, titulo, children, textoBoton = 'Eliminar', onConfirmar, onCancelar }) {
  const dialogo = useRef(null)

  // el dialog se abre y cierra con metodos, por eso el effect
  useEffect(() => {
    if (abierto && !dialogo.current.open) dialogo.current.showModal()
    if (!abierto && dialogo.current.open) dialogo.current.close()
  }, [abierto])

  return (
    <dialog
      ref={dialogo}
      onCancel={onCancelar}
      className="m-auto w-full max-w-sm rounded-xl shadow-xl p-6 backdrop:bg-black/40"
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
          <IconoAlerta className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{titulo}</h3>
          <div className="text-sm text-slate-600 mt-1">{children}</div>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-6">
        <Boton tipo="secundario" onClick={onCancelar}>Cancelar</Boton>
        <Boton tipo="peligro" onClick={onConfirmar}>{textoBoton}</Boton>
      </div>
    </dialog>
  )
}

export default Confirmar
