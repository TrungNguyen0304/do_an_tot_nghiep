import React from 'react';
import Sidebar from '../pages/Admin/siderBar/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    );
};

export default AdminLayout;
