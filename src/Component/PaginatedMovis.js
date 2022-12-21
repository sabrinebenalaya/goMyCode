import ListOfMovis from "./ListOfMovis";
import { useState } from "react";
import ReactPaginate from "react-paginate";


function PaginatedMovis({ itemsPerPage, movieList , text , rate}) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const m =movieList.filter((elt) => elt.title.toUpperCase().includes(text.toUpperCase()) && elt.rate>=rate)
console.log("la liste des movies =", m)
  const currentItems = m.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(m.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % m.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListOfMovis currentItems={currentItems}  />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedMovis;
