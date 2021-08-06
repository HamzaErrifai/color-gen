import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand" href="#" id="logo">
            ColorGen
          </a>
        </div>
      </nav>
      <div className="sub-nav">
        <button className="btn border rounded shadow-sm">Generate</button>
      </div>
    </>
  );
}

export default NavBar;
