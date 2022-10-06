import React, { useRef, useEffect, useState, useContext } from "react"
import mapboxgl from "mapbox-gl"
// import bbox from "@turf/bbox"
// import { multiPoint } from "@turf/helpers"
import Markers from "./markers"
import "mapbox-gl/dist/mapbox-gl.css"
import * as styles from "../styles/styles.module.css"
import { GlobalContext } from "../context/GlobalContext"
import SearchBarZipcode from "./SearchBarZipcode"
import SearchBarCity from "./searchBarCity"

// replace with your own Mapbox token
export const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGVjdG9ybGFwaCIsImEiOiJjazhtYjg5dGMwbHBjM2lxeG40aDBudzJqIn0.NrRc3iTV4ddFu-wx7rBOyw"
  
const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

const Map = () => {
  const {
    updatePlaces,
    activeCoords,
    geoJson,
    checked,
    handlePlaceClick,
    handleCityClick,
    handleZipClick,
    clickCity,
  } = useContext(GlobalContext)

  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  // const [filteredPlaces, setFilteredPlaces] = useState(placesData)
  // console.log("all places=>>", filteredPlaces)

  // useEffect(() => {
  //   if (!map) return

  //   if (typeof checked == "string" || checked == "") {
  //     console.log("checked is string ==>", checked)
  //   } else {
  //     // Iterate through each element in the
  //     // first array and if some of them
  //     // include the elements in the second
  //     // array then return true.
  //     function findCommonElements(arr1, arr2) {
  //       return arr1.some(item => arr2.includes(item))
  //     }
  //     console.log("checked is array ==>", checked)
  //   }

  //   filteredPlaces.map(place => {
  //     let arr = place.service_ids.split(",")
  //     console.log("service_ids =>>", arr)
  //   })
  // }, [map, placesData])

  // Create the Map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      // United States [lng, lat]
      // center: [-97.665, 39.2993],
      // zoom: 4.5,
    })
      .fitBounds([
        [-125.5057, 23.807],
        [-67.349, 50.8332],
      ])
      .addControl(new mapboxgl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [updatePlaces])

  useEffect(() => {
    if (!map) return

    if (activeCoords.placeClicked === true) {
      console.log("rendering")
      map.fitBounds([activeCoords.coordinates, activeCoords.coordinates], {
        zoom: 15,
        duration: 4000,
      })
    }
    return

  }, [handlePlaceClick])

  useEffect(() => {
    if (!map) return

    if (activeCoords.cityClicked === true) {
      console.log("rendering")
      map.fitBounds([activeCoords.coordinates, activeCoords.coordinates], {
        zoom: 11,
        duration: 4000,
      })
    }
    return

  }, [handleCityClick])

  useEffect(() => {
    if (!map) return

    if (activeCoords.zipClicked === true) {
      console.log("rendering")
      map.fitBounds(activeCoords.coordinates, {
        duration: 4000,
      })
    }
    return

  }, [handleZipClick])

  // console.log('geoJson=> ',geoJson)

  return (
    <>
      <div className={styles.mapContainer}>
        <div className={styles.searchContainer}>
      <SearchBarZipcode />
      <SearchBarCity />
      </div>

        <div ref={mapContainerRef} style={mapContainerStyle}>
          {updatePlaces && map && <Markers map={map} places={updatePlaces} />}
        </div>
        {/* <div>{checked}</div> */}
      </div>
    </>
  )
}

export default Map
