import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  let [width, setWidth] = useState(window.innerWidth);
  // console.log(width);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  // let next = () => {
  //   setPageNumber((x) => x + 1);
  // };
  // let prev = () => {
  //   if (pageNumber === 1) return;
  //   setPageNumber((x) => x - 1);
  // };
  // console.log(info.pages);
  return (
    // <div className="container d-flex justify-content-center gap-5 my-5">
    //   <button onClick={prev} className="btn btn-primary">
    //     prev
    //   </button>
    //   <button onClick={next} className="btn btn-primary">
    //     Next
    //   </button>
    // </div>
    <>
      <style>
        {`
      @media(max-width: 768px){
        .next, .prev {
          display:none;
        }
        .pagination {
          font-size: 14px;
        }
      }
      
      `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />{" "}
      // info?.pages means if info exists then add the .pages to it which
      eventually equals to 42
    </>
  );
};

export default Pagination;
