import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/adminlogin");
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    navigate("/adminlogin");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="d-flex justify-content-center mb-3">
        <Link to="view" className="btn btn-outline-primary me-2">
          View Data
        </Link>
        <Link to="edit" className="btn btn-outline-warning me-2">
          Edit Data
        </Link>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
