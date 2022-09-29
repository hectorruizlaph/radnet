import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";
import * as styles from "../styles/styles.module.css"

const ServiceList = () => {

  const { handleCheck, checked, isChecked, services, serviceClassName } = useContext(GlobalContext)

  return (
    <div className={styles.servicesContainer}>
      <div className="title">Services</div>
      <div className="list-container">
        {Object.keys(services).map((service, index) => (
          <div key={index}>
            <input value={service} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(serviceClassName)}>
              {services[service]} id: {service}
            </span>
          </div>
        ))}
      </div>
      {/* display checked services */}
      {/* <div>{`Services checked: ${checked}`}</div> */}
    </div>
  )
}

export default ServiceList
