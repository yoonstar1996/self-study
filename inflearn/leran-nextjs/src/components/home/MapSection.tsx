import React from "react";
import Map from "./Map";
import { NaverMap } from "@/types/map";
import useMap from "@/hooks/useMap";
import Markers from "./Markers";

export default function MapSection() {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };

  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
}
