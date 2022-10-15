import React from "react";

const Navbar = () => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-bg-primary bg-gradient fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{"fontSize":"30px"}}>NewsBox</a>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Country
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  India
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  United States
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Germany
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Russia
                </a>
              </li>
            </ul>
          </div>
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
