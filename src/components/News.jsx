import React from "react";
import NewsItem from "./NewsItem";

const Loading = ({ loading,data }) => {
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
      <div className="d-flex flex-wrap">
        {!loading &&
          Object.keys(data).length > 0 &&
          data.articles.map((item) => {
            return (
              <NewsItem
                imgUrl={item.urlToImage}
                title={item.title}
                desc={item.description}
                url={item.url}
              />
            );
          })}
      </div>
    );
  }
};

export default Loading;
