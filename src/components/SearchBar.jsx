import React from "react";
import { useRef } from "react";

const SearchBar = ({ searchKey }) => {
  const inputSearch = useRef();

  const searchHandle = () => {
   const word=inputSearch.current.value;
    if(word.trim().length > 0) searchKey(word)
    inputSearch.current.value="";
    //console.log(document.querySelector("input").value.split(" ").join(""));
  };
  return (
    <>
      <div className="text-bg-dark p-5 mb-2 d-flex justify-content-center">
        <div className="d-flex w-50" >
          <input
            className="form-control me-2"
            ref={inputSearch}
            type="text"
            placeholder="Search"
          />
          <button
            onClick={() => {
              searchHandle();
            }}
            className="btn btn-primary btn-outline-success text-white"

          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
