import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        Student-Teacher-Portal
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/students">
            Student
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
