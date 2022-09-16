import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Map from "./map"
import PostList from "./postList"
import * as styles from "../styles/styles.module.css"

const Layout = props => {
  const children = props.children
  const [places, setPlaces] = useState([])

  useEffect(() => {
    if (props && props.data) {
      setPlaces(props.data.markdownRemark.frontmatter.places)
    } else {
      setPlaces([])
    }
  }, [props])

  return (
    <>
      <div className={styles.container}>
        <PostList />
        <Map places={places} />
        <hr />
        {/* <main>{children}</main> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
