import React, { useState } from "react";
import { Card } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
function Login() {
  const [togglePasswordReset, setTogglePasswordReset] = useState(false);
  return (
    <>
      {!togglePasswordReset ? (
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ marginTop: "10rem" }}
        >
          <div className="d-flex align-text-center justify-content-center">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <h3>Login</h3>
                </Card.Title>
                <Card.Text className="mt-3 d-flex flex-column">
                  <TextField
                    variant="outlined"
                    label="Username"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  <TextField
                    className="mt-3"
                    type="password"
                    variant="outlined"
                    label="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  <Button variant="contained" className="mt-3" type="button">
                    LOGIN
                  </Button>

                  <p className="text-center">
                    Forgot Password? Click <a  style={{color: "blue", cursor: "pointer", textDecoration: "underline"}} onClick={() => setTogglePasswordReset(!togglePasswordReset)}>here</a>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{ marginTop: "10rem" }}
        >
          <div className="d-flex align-text-center justify-content-center">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <h3>Reset Password</h3>
                </Card.Title>
                <Card.Text className="mt-3 d-flex flex-column">
                  <TextField
                    variant="outlined"
                    label="email"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  
                  <Button variant="contained" className="mt-3" type="button">
                    Get password in email
                  </Button>

                  <p className="text-center">
                    Log in? Click <a style={{color: "blue", cursor: "pointer", textDecoration: "underline"}} onClick={() => setTogglePasswordReset(!togglePasswordReset)}>here</a>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
