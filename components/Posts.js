import React from "react";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div className=" mt-16">
        <div className="flex justify-around items-center w-full">
        <thead className=" bg-black text-white p-2 text-center" >Assetname</thead>
        <thead className=" bg-black text-white p-2 text-center">Latitude</thead>
        <thead className=" bg-black text-white p-2 text-center">Business Category</thead>
        <thead className=" bg-black text-white p-2 text-center " >Risk Rating</thead>
        <thead className=" bg-black text-white p-2 text-center" >Risk Tornado</thead>
        <thead  className=" bg-black text-white p-2 text-center">Risk Volcano</thead>
        </div>
        <table className="w-full border-2">
      {posts.map((post, index) => (
        <div key={index}>
          <tr key={index} className="flex justify-around items-center w-full" >
            <td className="border w-full text-center">{post.assetName}</td>
            <td className="border w-full text-center">{post.Lat}</td>
            {/* <td>{post.Long}</td> */}
            <td className="border w-full text-center">{post.businessCategory}</td>
            <td className="border w-full text-center">{post.riskRating}</td>
            <td className="border w-full text-center">{post.riskFactors.Tornado}</td>
            {/* <td>{post.riskFactors.Earthquake}</td> */}
            <td className="border w-full text-center">{post.riskFactors.Volcano}</td>
            {/* <td>{post.riskFactors.Wildfire}</td> */}
            {/* <td>{post.Year}</td> */}
          </tr>
          {/* <p>{post.body}</p> */}
        </div>
        
      ))}
      </table>
    </div>
  );
};

export default Posts;
