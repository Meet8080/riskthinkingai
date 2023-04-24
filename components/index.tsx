import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/map"), {
       loading: () => <p>loading...</p>,
       ssr: false
    })