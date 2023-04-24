"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import { LineChart } from "./Linechart";
import { Pagination } from "./Pagination";
import { DataTable } from "./Datatable";

interface location {
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
interface MyComponentProps {
  data: string[];
}

export default function Map() {
  const [assets, setAssets] = useState<location[]>([]);
  const [selectedDecade, setSelectedDecade] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the asset data from your API or local storage
    const fetchAssets = async () => {
      const response = await fetch("/api/location");
      const data = await response.json();
      // console.log(data.location);
      setAssets(data.location);
    };

    fetchAssets();
  }, []);
  // console.log(assets);
  const handleDecadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(event.target.value);
    setSelectedDecade(+event.target.value);
  };

  if (assets.length === 0) {
    return <p>Loading...</p>;
  }

  const filteredAssets = assets.filter((asset) => {
    if (!selectedDecade) {
      return true;
    }
    const startYear = selectedDecade;
    const endYear = startYear + 9;
    return asset.year >= startYear && asset.year <= endYear;
  });

  const getMarkerColor = (riskRating: number) => {
    if (riskRating <= 0.2) {
      return "green";
    } else if (riskRating <= 0.4) {
      return "yellow";
    } else if (riskRating <= 0.6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="">
      {/* Sorting the whole data using Data table */}
      {/* if you want to check the sorting of the data uncomment the below line */}
      {/* <DataTable meet={assets}/> */}

      {/* pagination is used to display the data in the table in a paginated manner */}
      {/* 500 array elements */}
      <Pagination meet={assets} />

      {/* Line chart is used to display the data in the form of line chart */}
      <LineChart />
      <div>
        <label htmlFor="decade-select">Select a decade:</label>
        <select
          id="decade-select"
          value={selectedDecade || ""}
          onChange={handleDecadeChange}
        >
          <option value="">All decades</option>
          <option value="2020">2020s</option>
          <option value="2030">2030s</option>
          <option value="2040">2040s</option>
          <option value="2050">2050s</option>
        </select>
      </div>
      <MapContainer
        className="map"
        center={[49.28594, -123.11129]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredAssets.map((asset, index) => (
          <Marker
            key={index}
            position={[asset.Lat, asset.Long]}
            icon={
              new L.Icon({
                iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getMarkerColor(
                  asset.riskRating
                )}.png`,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowUrl:
                  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
                shadowSize: [41, 41],
                shadowAnchor: [12, 41],
              })
            }
          >
            {/* This is for the cities name */}
            <Popup>
              <div>
                <h3>{asset.assetName}</h3>
                <p>{asset.businessCategory}</p>
              </div>
            </Popup>
            <Tooltip>{asset.assetName}</Tooltip>
          </Marker>
        ))}
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
