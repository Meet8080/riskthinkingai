import React, { useState } from "react";

// interface MyComponentProps {
//   meet: {
//     Lat: number;
//     Long: number;
//     assetName: string;
//     location: {
//       Lat: number;
//       Long: number;
//     };
//     businessCategory: string;
//     riskRating: number;
//     riskFactors: {
//       tornado: number;
//       earthquake: number;
//       volcano: number;
//       wildfire: number;
//     };
//     year: number;
//   }[];
// }
interface meet {
  Lat: number;
  Long: number;
  assetName: string;
  location: {
    Lat: number;
    Long: number;
  };
  businessCategory: string;
  riskRating: number;
  riskFactors: {
    tornado: number;
    earthquake: number;
    volcano: number;
    wildfire: number;
  };
  year: number;
}

interface DataTableProps {
  meet: meet[];
}
export const DataTable: React.FC<DataTableProps> = ({ meet }) => {
  console.log(meet);
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<string>("asc");

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      // If the same column is clicked again, reverse the sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If a different column is clicked, sort in ascending order
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = sortColumn
    ? meet.slice().sort((a, b) => {
        const aValue = a[sortColumn as keyof meet];
        const bValue = b[sortColumn as keyof meet];

        if (aValue < bValue) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      })
    : meet;

  //   console.log(sortedData[0]);

  const renderTableHeader = () => {
    return (
      <tr>
        <th onClick={() => handleSort("assetName")}>Asset Name</th>
        <th onClick={() => handleSort("lat")}>Latitude</th>
        <th onClick={() => handleSort("long")}>Longitude</th>
        <th onClick={() => handleSort("businessCategory")}>
          Business Category
        </th>
        <th onClick={() => handleSort("riskRating")}>Risk Rating</th>
        <th onClick={() => handleSort("riskFactors.Tornado")}>Tornado</th>
        <th onClick={() => handleSort("riskFactors.Earthquake")}>Earthquake</th>
        <th onClick={() => handleSort("riskFactors.Volcano")}>Volcano</th>
        <th onClick={() => handleSort("riskFactors.Wildfire")}>Wildfire</th>
        <th onClick={() => handleSort("year")}>Year</th>
      </tr>
    );
  };

  const renderTableData = () => {
    return sortedData.map((asset: any, index) => (
      <tr key={index}>
        <td>{asset.assetName}</td>
        <td>{asset.Lat}</td>
        <td>{asset.Long}</td>
        <td>{asset.businessCategory}</td>
        <td>{asset.riskRating}</td>
        <td>{asset.riskFactors.Tornado}</td>
        <td>{asset.riskFactors.Earthquake}</td>
        <td>{asset.riskFactors.Volcano}</td>
        <td>{asset.riskFactors.Wildfire}</td>
        <td>{asset.Year}</td>
      </tr>
    ));
  };

  return (
    <>
      <table className="w-full h-auto border-1 ">
        <thead className="font-bold">{renderTableHeader()}</thead>
        <tbody className="p-2 text-blue-300 font-bold">
          {renderTableData()}
        </tbody>
      </table>
    </>
  );
};
