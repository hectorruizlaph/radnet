import React, { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";

import * as styles from "../styles/styles.module.css"


const PostList = () => {
const { placesData, handlePlaceClick, selected } = useContext(GlobalContext)
  return (
    <div className={styles.listContainer}>
        {/* The onClick for all locations ---\ */}
        <div className={styles.allLocations}>
          <img src="/logo.png" alt="radnet logo" />
          {/* <p>See All Locations</p> */}
        </div>
      <div>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          {placesData.map( place => {
            const name = place.name
            return (
              <div
                onClick={() => handlePlaceClick(place.id, place.coordinates)}
                className={styles.listItems}
                key={place.id}
                //styles.active
              >
                <li className={styles.listItemsText}>
                  <h3>{name}</h3>
                  <p>
                    {place.postal} - {place.city}
                  </p>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PostList
