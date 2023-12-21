import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#142b3d" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <p className="text-white">Admin</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="d-flex" role="search">
            <Link className="btn btn-success me-2" to="/customer">
              Customer
            </Link>
            <Link className="btn btn-success" to="/login">
              Login
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
