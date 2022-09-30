import React, { useState, useContext } from "react"
import * as styles from "../styles/styles.module.css"
import { GlobalContext } from "../context/GlobalContext"

const SearchBarCity = () => {
  const { uniqueCities, handleCityClick } = useContext(GlobalContext)
  const [query2, setQuery2] = useState("")
  
  return (
    <div className={styles.searchCity}>
      <input
        placeholder="    Search a City"
        onChange={event => setQuery2(event.target.value)}
      />
      <div className={styles.searchListCity}>
      {uniqueCities
        .filter(city => {
          if (query2 === "") {
            return city
          } else if (city.toLowerCase().includes(query2.toLowerCase())) {
            return city
          }
        })
        .map((city, index) => (
          <div className={styles.city} key={index} onClick={() => handleCityClick(city)}>
            <p>{city}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default SearchBarCity
