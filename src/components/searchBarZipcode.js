import React, { useState, useContext } from "react"
import * as styles from "../styles/styles.module.css"
import { GlobalContext } from "../context/GlobalContext"

const SearchBarZipcode = () => {
  const { zipQuery, setZipQuery, uniqueZipcodes, handleZipClick } = useContext(GlobalContext)

  return (
    <div className={styles.searchZip}>
      <input
        placeholder="    Search a ZIP Code"
        onChange={event => setZipQuery(event.target.value)}
      />
      <div className={styles.searchListZip}>
        {uniqueZipcodes
          .filter(zipcode => {
            if (zipQuery === "") {
              return zipcode
            } else if (zipcode.toLowerCase().includes(zipQuery.toLowerCase())) {
              return zipcode
            }
          })
          .map((zipcode, index) => (
            <div
              className={styles.zipcode}
              key={index}
              onClick={() => handleZipClick(zipcode)}
            >
              <p>{zipcode}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchBarZipcode
