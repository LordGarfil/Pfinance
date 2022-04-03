import { useState, useEffect } from "react"

import Table from "@components/Table"
import Header from "@components/prestamos/home/Header"

const PrestamosContainer = () => {
  const columnsTable = [
    { field: "id", headerName: "Prestámo ID" },
    { field: "cliente", headerName: "Cliente" },
    { field: "fecha", headerName: "Fecha" },
    { field: "valor", headerName: "Valor" },
    { field: "interes", headerName: "Interés" },
    { field: "total", headerName: "Total" },
  ]

  const [prestamos, setPrestamos] = useState([])

  useEffect(()=>{
    if(typeof window !== "undefined"){
      setPrestamos(JSON.parse(localStorage.getItem('prestamos')))
    }
  }, [])

  return (
    <div className="prestamos-container">
      <Header />
      <Table columns={columnsTable} rows={prestamos} />
    </div>
  )
}

export default PrestamosContainer
