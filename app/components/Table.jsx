import { DataGrid } from "@mui/x-data-grid"

export default function DataTable(props) {
  const {columns, rows, config, style} = props
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
  );
}