import React from "react";

function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white text-center p-3">
      <p>&copy; {new Date().getFullYear()} Designed and developed by ASH</p>
    </footer>
  );
}

export default Footer;
