import { Outlet, Link } from "react-router-dom";
import "../Sidebar.css";

const Sidebar = () => {
  const links=document.querySelectorAll(".nav-link");
  const active=(e)=>{
    links.forEach(item=>{item.classList.remove("active")})
    e.target.classList.add("active");
  }
  return (
    <div className="d-flex ">
      <div
        className="mainss d-flex flex-column flex-shrink-0 p-3 text-bg-dark position-fixed"
        style={{ width: "280px",height:"100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">NewsBox</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <Link className="nav-link text-white" aria-current="page" to={"/"} onClick={(e)=>active(e)}>
              General
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={"/business"} onClick={(e)=>active(e)}>
              Business
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={"/technology"} onClick={(e)=>active(e)}>
              Technology
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={"/entertainment"} onClick={(e)=>active(e)}>
              Entertainment
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={"/health"} onClick={(e)=>active(e)}>
              Health
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={"/sports"} onClick={(e)=>active(e)}>
              Sports
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to={"/science"} onClick={(e)=>active(e)}>
              Science
            </Link>
          </li>
{/*           
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </a>
          </li> */}
          
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="/"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* <img
              src="https://github.com/.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            /> */}
            <strong>NB</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Create New Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              My Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;

