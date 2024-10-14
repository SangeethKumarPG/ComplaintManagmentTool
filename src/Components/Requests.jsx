import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, TextField } from '@mui/material';
import * as XLSX from 'xlsx'; // For exporting to Excel

function Requests() {
    const [searchText, setSearchText] = useState('');
    const [tableData] = useState([
        { id: 1, department: "IT", requestFor: "Printer is not working", requestedUser: "Sangeeth Kumar", status: "Open", resolvedBy: "N/A" },
        { id: 2, department: "HR", requestFor: "Need more chairs", requestedUser: "John Doe", status: "Closed", resolvedBy: "N/A" },
        // Add more entries as needed
    ]);

    const columns = [
        { field: 'id', headerName: '#', width: 90 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'requestFor', headerName: 'Request For', width: 250 },
        { field: 'requestedUser', headerName: 'Requested User', width: 150 },
        { field: 'status', headerName: 'Status', width: 110 },
        { field: 'resolvedBy', headerName: 'Resolved By', width: 150 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => (
                <div className="d-flex align-items-center justify-content-evenly">
                    <VisibilityIcon />
                    <Button variant="contained" onClick={() => handleAssign(params.row.id)}>
                        Assign
                    </Button>
                </div>
            ),
        },
    ];

    const handleAssign = (id) => {
        console.log(`Assigning request with ID: ${id}`);
    };

    const handleExport = () => {
        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Requests");
        XLSX.writeFile(workbook, "Requests.xlsx");
    };

    // Filter data based on search text
    const filteredData = tableData.filter(row =>
        Object.values(row).some(value =>
            String(value).toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <>
            <div className="container">
                <div className="container d-flex align-items-center justify-content-start">
                    <h5>Requests:</h5>
                </div>
                <div className="container d-flex align-items-center justify-content-end mb-2">
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-25 ms-2"
                        size="small"
                    />
                    <Button variant="contained" onClick={handleExport} style={{ marginLeft: '10px' }}>
                        Export to Excel
                    </Button>
                </div>
            </div>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={filteredData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection={false}
                    disableSelectionOnClick
                />
            </div>
        </>
    );
}

export default Requests;
