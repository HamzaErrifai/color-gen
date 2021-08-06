import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand" href="/" id="logo">
            ColorGen
          </a>
        </div>
      </nav>
      <div className="sub-nav">
        <Link className="btn border rounded shadow-sm" to="/generate">Generate</Link>
      </div>
    </>
  );
}

export default NavBar;
