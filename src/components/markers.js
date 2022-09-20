import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"

const Marker = ({ map, place }) => {
  const markerRef = useRef()

  // const _onClick = () => {
  //   onClick(place.latitude)
  // }

  useEffect(() => {
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat([place.longitude, place.latitude])
      .addTo(map)

    // Create All Popups
    // const popup = new mapboxgl.Popup(popupRef)
    //   .setLngLat([place.longitude, place.latitude])
    //   .setHTML(
    //     `<div>${place.name}</div>`
    //   )
    //   .addTo(map)

    return () => marker.remove()
  })

  // return <div ref={markerRef} onClick={() => setPopup({popup})} />
  return <div ref={markerRef} />
}

const Markers = ({ map, places }) => {

  return (
    <>
      <div>
        {places &&
          places.map(place => (
            <Marker key={place.name} map={map} place={place} />
          ))}
      </div>
    </>
  )
}

export default Markers
