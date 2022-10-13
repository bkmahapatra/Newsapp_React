import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div className="card m-3" style={{"width": "18rem"}}>
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.desc}</p>
          <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
