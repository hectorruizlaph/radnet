import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./map"
import Map2 from "./map2"
import PostList from "./postList"
import * as styles from "../styles/styles.module.css"
import ServiceList from "./services"
import FilterTypes from "./filterTypes"

const Layout = () => {
  // console.log("data from layout=> ",data)
  // const { placesData } = usePlaces()

  // const name = placesData.name
  // const latitude = placesData.latitude
  // const longitude = placesData.longitude

  // const placesArr = [longitude, latitude]
  // const children = props.children
  // const [places, setPlaces] = useState([])

  // useEffect(() => {
  //   if (data) {
  //     setPlaces(placesData.coordinates)
  //   } else {
  //     setPlaces([])
  //   }
  // }, [data])

  return (
    <>
      <div className={styles.container}>
        <PostList />
        <ServiceList />
        <FilterTypes />
        <Map />
        {/* <Map2 /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
