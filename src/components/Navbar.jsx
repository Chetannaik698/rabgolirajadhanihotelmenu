import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light custom-navbar">
      <Link to={"/"} className="navbar-brand">
        <h5 className="brand-name"><img src="/menu.png" alt="" /></h5>
      </Link>

      {/* Offcanvas Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav ms-auto">
            <Link to={"/"} className="nav-link" >MAIN COURSE</Link>
            <Link to={"/starters&snacks"} className="nav-link" >STARTERS & SNACKS</Link>
            <Link to={"/breads&acom"} className="nav-link" >BREAD & ACOOMPANIMENTS</Link>
            <Link to={"/biryani&chinese"} className="nav-link" >BIRYANI CHINESE</Link>
            <Link to={"/beverages&deserts"} className="nav-link" >BEVARAGES & DESERTS</Link>
            <Link to={"/tandoori"} className="nav-link" >TANDOORI</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
