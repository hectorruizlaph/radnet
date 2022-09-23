import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./map"
import PostList from "./postList"
import * as styles from "../styles/styles.module.css"
import usePlaces from "../hooks/usePlaces"
import ServiceList from "./services"

const Layout = ({data}) => {
  const { placesData } = usePlaces()

  const name = placesData.name
  const latitude = placesData.latitude
  const longitude = placesData.longitude

  const placesArr = [longitude, latitude]
  // const children = props.children
  const [places, setPlaces] = useState([])

  useEffect(() => {
    if (data) {
      setPlaces(placesData.coordinates)
    } else {
      setPlaces([])
    }
  }, [data])

  return (
    <>
      <div className={styles.container}>
        <PostList />
        <ServiceList />
        <Map places={places} />
        {/* <hr />
        <main>{children}</main> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
