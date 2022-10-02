import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";
import * as styles from "../styles/styles.module.css"

const FilterTypes = () => {

  const { handleCheckType, typeChecked, typeIsChecked, types } = useContext(GlobalContext)

  return (
    <div className={styles.servicesContainer}>
      <div className="title">Types</div>
      <div className="list-container">
        {Object.keys(types).map((type, index) => (
          <div key={index}>
            <input value={type} type="checkbox" onChange={handleCheckType} />
            <span>
              {types[type]} id: {type}
            </span>
          </div>
        ))}
      </div>
      {/* display checked services */}
      {/* <div>{`Services checked: ${checked}`}</div> */}
    </div>
  )
}

export default FilterTypes
