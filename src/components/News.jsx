import React from "react";
import NewsItem from "./NewsItem";

const Loading = ({ loading, data }) => {
  const fixlen=(word,len)=>{
    if(word) return word.slice(0,len);
  }
  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p class="fs-3 fw-bold text-center">{data.title}</p>
        {!loading &&
          Object.keys(data).length > 0 &&
          data.articles.map((item) => {
            return (
              <NewsItem
                imgUrl={item.urlToImage}
                title={fixlen(item.title,100)}
                desc={fixlen(item.description,150)}
                url={item.url}
              />
            );
          })}
      </div>
    );
  }
};

export default Loading;
