import React from "react";

const Numberofpages = ({ postsPerPage, totalPosts, paginate }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center"><h1 className="text-center">Number Of Pages</h1></div>
      <ul className="w-full flex flex-row justify-around items-start">
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(1)}>1</a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(2)} className="page-link">
            2
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(3)} className="page-link">
            3
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(4)} className="page-link">
            4
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(5)} className="page-link">
            5
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(6)} className="page-link">
            6
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(7)} className="page-link">
            7
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(8)} className="page-link">
            8
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(9)} className="page-link">
            9
          </a>
        </li>
        <li className="page-item bg-blue-400 px-4 py-2">
          <a onClick={() => paginate(10)} className="page-link">
            10
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Numberofpages;
