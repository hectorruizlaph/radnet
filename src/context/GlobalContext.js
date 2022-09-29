import React, { createContext, useEffect, useState } from "react"
import usePlaces from "../hooks/usePlaces"

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  //retrived info from custom hook
  const { placesData } = usePlaces()

  let allData = new Array()
  placesData.map(place=>{
    allData.push(place)
  })

  //modify places depending on selected
  const [updatePlaces, setUpdatePlaces] = useState(allData)

  // State with list of all checked services
  const [checked, setChecked] = useState([])

  // State with list of place clicked
  const [activeCoords, setActiveCoords] = useState({
    id: 1,
    coordinates: [-97.665, 39.2993],
  })

// styles for list item clicked
// const [selected, setSelected] = useState(false);


  const handlePlaceClick = (id, coordinates) => {
    setActiveCoords({
      id: id,
      coordinates: coordinates,
    })
  }


  

  const coordinatesToDisplay = activeCoords.coordinates
  // console.log("coordinatesToDisplay=> ", coordinatesToDisplay)

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    let updatedList = [...checked]
    if (event.target.checked === true) {
      updatedList = [...checked, event.target.value]
    setChecked(updatedList)
    } else {
    setChecked(updatedList.filter(e => e !== `${event.target.value}`))
    }
    setActiveCoords({
      id: 0,
      coordinates: [-97.665, 39.2993],
    })
  }

  let isChecked = service =>
    checked.includes(service) ? "checked-item" : "not-checked-item"

  // const services = [
  //   {
  //     1626: "3D Mammography",
  //   },
  //   {
  //     2011: "3D Tomosynthesis",
  //   },
  //   {
  //     1911: "Angiography",
  //   },
  //   {
  //     1656: "Arthrography",
  //   },
  //   {
  //     1651: "Biopsy",
  //   },
  //   {
  //     2026: "Breast Biopsy",
  //   },
  //   {
  //     2016: "Breast Ultrasound",
  //   },
  //   {
  //     1546: "Calcium Scoring",
  //   },
  //   {
  //     1621: "CTA",
  //   },
  //   {
  //     2036: "Digital Fluoroscopy",
  //   },
  //   {
  //     1916: "Digital Mammography",
  //   },
  //   {
  //     1921: "Hysterosalpingography",
  //   },
  //   {
  //     1896: "Lung Cancer Screening",
  //   },
  //   {
  //     1581: "Mammography",
  //   },
  //   {
  //     2531: "MR Guided Breast Biopsy",
  //   },
  //   {
  //     1661: "MRA",
  //   },
  //   {
  //     1691: "MRI (1.2T Open/High Field)",
  //   },
  //   {
  //     2956: "MRI (1.5T Wide-Bore)",
  //   },
  //   {
  //     1541: "MRI (1.5T Wide-Open)",
  //   },
  //   {
  //     1646: "MRI (1.5T)",
  //   },
  //   {
  //     2951: "MRI (3T Wide-Bore)",
  //   },
  //   {
  //     1536: "MRI (3T Wide-Open)",
  //   },
  //   {
  //     1636: "MRI (3T)",
  //   },
  //   {
  //     1641: "MRI (Extremity)",
  //   },
  //   {
  //     1631: "MRI (Open)",
  //   },
  //   {
  //     1666: "Musculoskeletal Ultrasound",
  //   },
  //   {
  //     1586: "Nuclear Medicine",
  //   },
  //   {
  //     1556: "PET/CT",
  //   },
  //   {
  //     1996: "PET/MRI",
  //   },
  //   {
  //     2096: "Prostate MRI",
  //   },
  //   {
  //     2936: "PSMA PET/CT",
  //   },
  //   {
  //     2021: "Stereotactic Breast Biopsy",
  //   },
  //   {
  //     1681: "Ultrasound (3D)",
  //   },
  //   {
  //     1686: "Ultrasound (4D)",
  //   },
  //   {
  //     2821: "Ultrasound Guided Breast Biopsy",
  //   },
  //   {
  //     1671: "Ultrasound Thyroid Fine Needle Aspiration",
  //   },
  // ]

  const services = {
    1626: "3D Mammography",
    2011: "3D Tomosynthesis",
    1911: "Angiography",
    1656: "Arthrography",
    1651: "Biopsy",
    2026: "Breast Biopsy",
    2016: "Breast Ultrasound",
    1546: "Calcium Scoring",
    1621: "CTA",
    2036: "Digital Fluoroscopy",
    1916: "Digital Mammography",
    1921: "Hysterosalpingography",
    1896: "Lung Cancer Screening",
    1581: "Mammography",
    2531: "MR Guided Breast Biopsy",
    1661: "MRA",
    1691: "MRI (1.2T Open/High Field)",
    2956: "MRI (1.5T Wide-Bore)",
    1541: "MRI (1.5T Wide-Open)",
    1646: "MRI (1.5T)",
    2951: "MRI (3T Wide-Bore)",
    1536: "MRI (3T Wide-Open)",
    1636: "MRI (3T)",
    1641: "MRI (Extremity)",
    1631: "MRI (Open)",
    1666: "Musculoskeletal Ultrasound",
    1586: "Nuclear Medicine",
    1556: "PET/CT",
    1996: "PET/MRI",
    2096: "Prostate MRI",
    2936: "PSMA PET/CT",
    2021: "Stereotactic Breast Biopsy",
    1681: "Ultrasound (3D)",
    1686: "Ultrasound (4D)",
    2821: "Ultrasound Guided Breast Biopsy",
    1671: "Ultrasound Thyroid Fine Needle Aspiration",
  }

  // const geoJson = {
  //   features: [],
  // }

  // updatePlaces.map(place => {
  //   geoJson.features.push({
  //     type: "Feature",
  //     properties: {
  //       title: place.name,
  //       id: place.id,
  //     },
  //     geometry: {
  //       coordinates: [Number(place.longitude), Number(place.latitude)],
  //       type: "Point",
  //     },
  //   })
  // })

  // const geoJson2 = {
  //   features: [],
  //   type: "FeatureCollection",
  // }

  // updatePlaces.map(place => {
  //   geoJson2.features.push({
  //     type: "Feature",
  //     properties: {
  //       title: place.name,
  //       id: place.id,
  //     },
  //     geometry: {
  //       coordinates: [Number(place.longitude), Number(place.latitude)],
  //       type: "Point",
  //     },
  //   })
  // })

  // checked services re-rendering markers
  useEffect(() => {
    const newPlaces = []

    if (checked[0] === undefined || checked === '') {
      setUpdatePlaces(allData)
      return
    }

    if (checked.length === 1) {
      updatePlaces.map( (place, index) => {
        if (place.service_ids.includes(checked[0])) {
          newPlaces.push(place)
        } 
      })
      setUpdatePlaces(newPlaces)
      return
    }

    updatePlaces.map(place => {
      checked.map((id, index) => {
        if (place.service_ids.includes(id)) {
          newPlaces.push(place)
        } 
      })
      // for (let i = 0; i < place.service_ids.length; i++) {
      //   console.log("este es i= ", i)
      //   console.log("individual service is = ", place.service_ids[i])
      // }
    })
    setUpdatePlaces(newPlaces)
  }, [checked])

  const value = {
    handleCheck,
    checked,
    isChecked,
    services,
    updatePlaces,
    handlePlaceClick,
    coordinatesToDisplay,
    // geoJson,
    placesData
    // selected,
    // findCommonElements,
  }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}
