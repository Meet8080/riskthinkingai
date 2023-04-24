"use client";

import dynamic from "next/dynamic";
// import {Pagination} from "../../components/pagination/pagination"

// import Link from "next/link";
// import { useEffect, useState } from "react";
// const Map = dynamic(() => import("../../components/map"), {
//   loading: () => <p>loading...</p>,
//   ssr: false
// })
import Map from "../../components/map";
// import Pagination from "../../components/Pagination";
// import Map from "";

export default function Home() {
  const Map = dynamic(() => import("../../components/map"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });
  return (
    <div>
      {/* <Pagination meet={undefined} /> */}

      <Map />
    </div>
  );
}
