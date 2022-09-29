import React, { useRef, useEffect, useContext } from "react"
import mapboxgl from "mapbox-gl"
import { geojson } from "./geoJson"
import * as styles from "../styles/styles.module.css"
import "./Map.css"
import { GlobalContext } from "../context/GlobalContext"

const Marker = ({ map, place }) => {
  // const { checked, placesData } = useContext(GlobalContext)

  // console.log('placesData=> ',placesData)
  // console.log('checked=> ', checked)
  const markerRef = useRef(null)

  //   const filteredPlaces = (checked) => {
  //     console.log('checked => ', checked)
  //     if(checked)
  //     placesData.map( place => {
  //     const arr = place.service_ids.split(',')
  //     console.log('checked =>',arr)
  //     // const filteredArr = arr.filter(service => service.includes(checked))
  //     // console.log(filteredArr)
  //     // return arr
  //   })
  // }
  // console.log(filteredPlaces(checked))

  // const filterServices = (arrayOfServices, input) => {
  //   return arrayOfServices.filter(service => service.includes(input));
  // };
  // if (checked)
  // placesData.map(place => {
  //   filterServices(place.service_ids, "1626")
  // })
  // useEffect(() => {
  //   console.log(checked)
  //   // return () => checked.remove()
  // }, [map, checked])

  useEffect(() => {
    // markerRef.current.className = "marker"
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat(place.coordinates)
      .addTo(map)

  // console.log('markerRef ==> ', markerRef.current)

    return () => marker.remove()
  })
  return (
    <>
      <div ref={markerRef} />
    </>
  )
}

const Markers = ({ map, places }) => {
  return (
    <>
      <div>
        {places &&
          places.map((place, index) => (
            <Marker key={index} map={map} place={place} />
          ))}
      </div>
    </>
  )
}

export default Markers
