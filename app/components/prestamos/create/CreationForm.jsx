import { useState, useEffect } from "react"

function CreationForm() {
  const [dataForm, setDataForm] = useState({})
  const [valor, setValor] = useState(null)
  const [interes, setInteres] = useState(null)
  const [total, setTotal] = useState(null)

  const totalize = (interes, valor) => {
    const newTotal = (Number(valor) + ( Number(valor) * (Number(interes) / 100) ) )
    setTotal(newTotal)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const newData = {
        cliente: data.nombreCliente + data.apellidoCliente,
        fecha: data.fecha,
        valor: Number(data.valor),
        interes: Number(data.interes)
      }
    create({...newData, id: 1, total})
  }

  const create = (data) => {
    const prestamos = JSON.parse(localStorage.getItem('prestamos')) || []
    localStorage.setItem('prestamos', JSON.stringify([...prestamos, data]))
    console.log(JSON.parse(localStorage.getItem('prestamos')))
  }

  useEffect(() => {
    totalize(interes, valor)
  }, [valor, interes])

  return (
    <form className="creation-prestamo-form" onSubmit={onSubmit}>
      <div className="form-floating">
        <input type="text" className="form-control" placeholder="Nombre" id="prestamoClientName" name="nombreCliente"/>
        <label htmlFor="prestamoClientName">Nombre</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" placeholder="Nombre" id="prestamoClientLastName" name="apellidoCliente"/>
        <label htmlFor="prestamoClientLastName">Apellido</label>
      </div>
      <div className="form-floating">
        <input type="date" className="form-control" placeholder="Fecha" id="prestamoFecha" name="fecha"/>
        <label htmlFor="prestamoFecha">Fecha</label>
      </div>
      <div className="form-floating">
        <input type="number" className="form-control" placeholder="Valor" id="prestamoValor" name="valor"
        onInput={e => setValor(e.target.value)}/>
        <label htmlFor="prestamoValor">Valor</label>
      </div>
      <div className="form-floating">
        <input type="number" className="form-control" placeholder="Interés" id="prestamoInteres" name="interes"
        onInput={e => setInteres(e.target.value)}/>
        <label htmlFor="prestamoInteres">Interés (%)</label>
      </div>
      <div className="form-floating">
        <input type="number" className="form-control" placeholder="Total" id="prestamoTotal" name="total"
        value={total} disabled />
        <label htmlFor="prestamoTotal">Total</label>
      </div>
      <div className="actions-group">
        <button type="submit" className="btn btn-primary form-control">
          Crear
        </button>
      </div>
    </form>
  )
}

export default CreationForm