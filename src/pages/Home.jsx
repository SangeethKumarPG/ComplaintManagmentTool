import React from 'react';
import { Outlet } from 'react-router-dom';

function Home({ drawerOpen }) {
  return (
    <div
      style={{
        marginLeft: drawerOpen ? 240 : 0, // Adjust for drawer width when open
        transition: 'margin 0.3s',
      }}
    >
      <h1>Home Page Content</h1>
      {/* Your home page content goes here */}
      <div className="container mt-5">
      <Outlet/>
      </div>
      
    </div>
  );
}

export default Home;
