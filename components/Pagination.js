import { useState } from "react";
import Posts from "./Posts";
import NumberOfPages from "./NumberOfPages";
// import { Pagination } from './pagination/pagination';

export const Pagination = ({ meet }) => {
  // console.log(meet);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(500);
  const indexOfLastPost = currentPage * postsPerPage;
  // console.log(indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = meet.slice(indexOfFirstPost, indexOfLastPost);
  console.log(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPosts);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log(paginate);
  return (
    <div className="w-full ">
      <NumberOfPages
        postsPerPage={postsPerPage}
        totalPosts={meet.length}
        paginate={paginate}
      />

      <Posts posts={currentPosts} />
    </div>
  );
};
