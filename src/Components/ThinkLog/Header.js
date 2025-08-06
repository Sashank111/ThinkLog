import React from "react";
import Logo from "./Assets/Logo.png";
const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary align-items-center">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="ThinkLog Logo"
              className="img-fluid rounded"
              style={{ height: "50px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fs-5" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/explore">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/account">
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
