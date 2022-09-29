import React, { useRef, useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
// import image from "./map-pin.png"
import geoJson2 from "./chicago-parks.json";
import { GlobalContext } from "../context/GlobalContext"


mapboxgl.accessToken =
"pk.eyJ1IjoiaGVjdG9ybGFwaCIsImEiOiJjazhtYjg5dGMwbHBjM2lxeG40aDBudzJqIn0.NrRc3iTV4ddFu-wx7rBOyw";

const Map = () => {
  const mapContainerRef = useRef(null);
  const { geoJson } = useContext(GlobalContext)

  console.log('geoJson => ',geoJson)
  console.log('geoJson2 => ',geoJson2)
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.65, 41.84],
      zoom: 10,
    });
    console.log('features', geoJson2.features)
      map.on("load", function () {
        // Add an image to use as a custom marker
        map.loadImage(
          // "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
          "./pin-dark.png",
          function (error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);
            // Add a GeoJSON source with multiple points
            map.addSource("points", {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: geoJson2.features,
              },
            });
            // Add a symbol layer
            map.addLayer({
              id: "points",
              type: "symbol",
              source: "points",
              layout: {
                "icon-image": "custom-marker",
                // get the title name from the source's "title" property
                "text-field": ["get", "title"],
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 1.25],
                "text-anchor": "top",
              },
            });
          }
        );
      });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;