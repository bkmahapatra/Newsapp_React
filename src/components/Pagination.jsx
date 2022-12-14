import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ loading, totalPost, postPerPage,paginate }) => {
  const totalPage = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    totalPage.push(i);
  }

  if (!loading) {
    return (
      <nav aria-label="Page navigation example ">
        <ul className="pagination d-flex justify-content-center my-4">
          <li className="page-item">
            <Link onClick={()=>paginate("prev")} className="btn btn-primary m-1" to="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </Link>
          </li>
          {totalPage.map((item) => {
            return (
              <li className="page-item">
                <Link onClick={()=>paginate(item)} className="btn btn-primary m-1" to="">
                  {item}
                </Link>
              </li>
            );
          })}

          <li className="page-item">
            <Link onClick={()=>paginate("next")} className="btn btn-primary m-1" to="" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Pagination;
