const PrestamoItem = (props) => {
  const {prestamo_id, cliente, fecha, valor, interes, total} = props.data
  return <div key={prestamo_id}>
    <p>{prestamo_id}</p>
    <p>{cliente}</p>
    <p>{fecha}</p>
    <p>{valor}</p>
    <p>{interes}</p>
    <p>{total}</p>
  </div>
}

export default PrestamoItem