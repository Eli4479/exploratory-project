import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
  { 
    field: 'id', headerName: 'Roll No', width: 200 },
  {
    field: 'attendance',
    headerName: 'Attendance %',
    type: 'number',
    width: 180,
    editable: true,
  },
  
  
];

const rows = [
  { id: 21084001, fullName: 'Jon Snow', attendance: 35 },
  { id: 21084002, fullName: 'Cersei Lannister', attendance: 42 },
  { id: 21084003, fullName: 'Jaime Lannister', attendance: 45 },
  { id: 21084004, fullName: 'Arya Stark', attendance: 16 },
  { id: 21084005, fullName: 'Daenerys Targaryen', attendance: 85 },
  { id: 21084006, fullName: 'Melisandre', attendance: 90 },
  { id: 21084007, fullName: 'Ferrara Clifford', attendance: 44 },
  { id: 21084008, fullName: 'Rossini Frances', attendance: 36 },
  { id: 21084009, fullName: 'Harvey Roxie', attendance: 65 },
];

export default function class_attendance() {
  return (
    <>
    <div style={{ margin:'50px'}}><h1 style={{fontSize:'35px'}}>Attendance of all students of <span>EE231</span> </h1></div>
    <Box sx={{ height: 400, width: '80%',margin:'50px', overflow:'hidden' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </>
  );
}
