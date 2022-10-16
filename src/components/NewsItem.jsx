import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div className="card  m-2">
        <div className="d-flex">
        <img
          src={props.imgUrl}
          className="card-img-left"
          alt="..."
          style={{ width: "15rem", height: "10rem", borderRadius:"15px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href={props.url} className="btn btn-outline-primary">
            Read More
          </a>
        </div>
        </div>
      </div>

      
    </>
  );
};

export default NewsItem;
