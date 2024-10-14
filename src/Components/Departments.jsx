import React,{useState} from 'react'
import { Table } from'react-bootstrap'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MuiTelInput } from "mui-tel-input";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
function Departments() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [open, setOpen] = React.useState(false);
    const [departmentHead, setDepartmentHead] = useState("");
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <>
    <div className="container">
        <div className="container d-flex justify-content-start">
            <h5>Departments:</h5>
        </div>
        <div className="container d-flex justify-content-end mb-2">
        <button className="btn btn-primary" onClick={handleClickOpen}>Add department</button>
        </div>
    
    
    </div>
    
        <Table striped bordered hover>
            <thead>
                <tr className='text-center'>
                    <th>#</th>
                    <th>Department</th>
                    <th>User</th>
                    
                    <th>Mobile No:</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr>
                    <td>1</td>
                    <td>Department</td>
                    <td>User Name</td>
                    
                    <td>987654321</td>
                    <td>
                        <div className="d-flex align-items-center justify-content-evenly">
                            <EditIcon />
                            <DeleteIcon />
                        
                        </div>
                        
                    </td>
                </tr>
            </tbody>
        </Table>
        <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add new department</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the department's details
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="deptname"
            name="deptname"
            label="Department Name"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-2"
          />

          <MuiTelInput
            label="HOD Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            variant="outlined"
            fullWidth
            className="mb-2"
          />

          <FormControl fullWidth margin="dense" variant="outlined">
            <InputLabel id="user-role-label">Department Head</InputLabel>
            <Select
              labelId="user-role-label"
              id="user-role"
              value={departmentHead}
              onChange={(e) => setDepartmentHead(e.target.value)}
              label="Department"
              required
            >
              <MenuItem value="id1">User 1</MenuItem>
              <MenuItem value="id2">User 2</MenuItem>
              <MenuItem value="id3">User 3</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add department</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Departments