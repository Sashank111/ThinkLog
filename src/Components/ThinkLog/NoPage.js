import React from "react";
import { Link } from "react-router-dom";
import Not from "./Assets/Logo.png";
function NoPage() {
  return (
    <div className="container text-center my-5" style={{ minHeight: "80vh" }}>
      <img src={Not} alt="404 Not Found" className=" mb-4" />
      <h1 className="display-4 text-danger">404 - Page Not Found</h1>
      <p className="lead">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}

export default NoPage;
