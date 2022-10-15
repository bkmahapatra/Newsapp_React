import { Outlet,Link } from "react-router-dom";

const NewsContainer = () => {
  
  return (
    <div className="d-flex" style={{"marginTop":"70px"}}>
      <div className="">
        <ul className="nav flex-column text-bg-warning " style={{"height":"100vh"}}>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/"}>
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/business"}>
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/technology"}>
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/entertainment"}>
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/health"}>
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/sports"}>
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/science"}>
              Science
            </Link>
          </li>
        </ul>
      </div>

      <div  className="">
        <Outlet />
      </div>
    </div>
  );
};

export default NewsContainer;
