import React, { createContext, useState } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  // State with list of all checked item
  const [checked, setChecked] = useState([])

  // Add/Remove checked item from list
  const handleCheck = event => {
    let updatedList = [...checked]
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }
    setChecked(updatedList)
  }

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        console.log(total, item)
        return Array(total + ", " + item)
      })
    : ""

  // Return classes based on whether item is checked
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

  const value = { handleCheck, checkedItems, isChecked, services }

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

