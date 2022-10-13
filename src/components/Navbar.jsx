import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  text-bg-primary bg-gradient">
        <div className="container">
          <a className="navbar-brand " href="/">
            <i className="bi bi-newspaper "></i> NewsBox
          </a>
          {/* <img
              src="/docs/5.2/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            /> */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
