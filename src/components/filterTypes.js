import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";
import * as styles from "../styles/styles.module.css"

const FilterTypes = () => {

  const { handleCheckType, checkedTypes, types } = useContext(GlobalContext)

  return (
    <div className={styles.servicesContainer}>
      <div className="title">Types</div>
      <div className="list-container">
        {types.map((type, index) => (
          <div key={index}>
            <input value={type} type="checkbox" onChange={handleCheckType} />
            <span>
              {type}
            </span>
          </div>
        ))}
      </div>
      {/* display checked services */}
      <div>{`Types checked: ${checkedTypes}`}</div>
    </div>
  )
}

export default FilterTypes
