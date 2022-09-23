import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext";

const ServiceList = () => {

  const { handleCheck, checkedItems, isChecked, services } = useContext(GlobalContext)

  return (
    <div className="checkList">
      <div className="title">Services</div>
      <div className="list-container">
        {Object.keys(services).map((service, index) => (
          <div key={index}>
            <input value={service} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(service)}>
              {services[service]} id: {service}
            </span>
          </div>
        ))}
      </div>
      {/* display checked services */}
      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "30vw" }}
      >{`Services checked are: ${checkedItems}`}</div>
    </div>
  )
}

export default ServiceList
