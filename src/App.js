import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MyAppBar from './Components/MyAppBar';
import Home from './pages/Home';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Complaints from './Components/Complaints';
import Departments from './Components/Departments';
import Requests from './Components/Requests';
import Users from './Components/Users';

function App() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="App">
      {/* Conditionally render AppBar and Sidebar based on route */}
      {!isLoginPage && <MyAppBar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />}
      <Routes>
        <Route path="/" element={<Home drawerOpen={drawerOpen} />}>
          <Route path="/complaints" element={<Complaints />}/>
          <Route path="/departments" element={<Departments/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/users" element={<Users/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
