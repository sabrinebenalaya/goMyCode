import ListOfMovis from "./ListOfMovis";
import { useState } from "react";
import ReactPaginate from "react-paginate";
//
const Data = [
  {
    id: "1",
    title: "The Conjuring",
    poster: "https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg",
    decription:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    rate: 2,
    bdAnonce: "https://www.youtube.com/embed/k10ETZ41q5o",
  },
  {
    id: "2",
    title: "The Grudge",
    poster:
      "https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
    bdAnonce: "https://www.youtube.com/embed/O2NKzO-fxwQ",
  },
  {
    id: "3",
    title: "The Ring",
    poster: "https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 1,
    bdAnonce: "https://www.youtube.com/embed/yzR2GY-ew8I",
  },
  {
    id: "4",
    title: "The Shawshank Redemption",
    poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
    bdAnonce: "https://www.youtube.com/embed/6hB3S9bIaco",
  },
  {
    id: "5",
    title: "The Godfather",
    poster:
      "https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
    bdAnonce: "https://www.youtube.com/embed/UaVTIH8mujA",
  },
  {
    id: "6",
    title: "The Godfather: Part II",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hYUlSTUgCxfY-8ACz_E3CQWDKShEYEvGFw&usqp=CAU",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 3,
    bdAnonce: "https://www.youtube.com/embed/9O1Iy9od7-A",
  },
  {
    id: "7",
    title: "The Dark Knight",
    poster: "https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 2,
    bdAnonce: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: "8",
    title: "12 Angry Men",
    poster: "https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg",
    decription: "The Ring is a 2002 American supernatural horror film",
    rate: 4,
    bdAnonce: "https://www.youtube.com/embed/TEN-2uTi2c0",
  },
];

//

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListOfMovis currentItems={currentItems} />
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
export default PaginatedItems;
