import React, { useState } from "react";
import { Table } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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

function Users() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = React.useState(false);
  const [userDepartment, setUserDepartment] = useState("");

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
          <h5>Users:</h5>
        </div>
        <div className="container d-flex justify-content-end mb-2">
          <button className="btn btn-primary" onClick={handleClickOpen}>
            Add User
          </button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>User</th>
            <th>Department</th>
            <th>Mobile No:</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>User Name</td>
            <td>Department</td>
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
        <DialogTitle>Add new user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the user's details
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            className="mb-2"
          />

          <MuiTelInput
            label="Phone Number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            variant="outlined"
            fullWidth
            className="mb-2"
          />

          <FormControl fullWidth margin="dense" variant="outlined">
            <InputLabel id="user-role-label">Department</InputLabel>
            <Select
              labelId="user-role-label"
              id="user-role"
              value={userDepartment}
              onChange={(e) => setUserDepartment(e.target.value)}
              label="Department"
              required
            >
              <MenuItem value="it">IT</MenuItem>
              <MenuItem value="hr">HR</MenuItem>
              <MenuItem value="files">Files</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add user</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Users;
