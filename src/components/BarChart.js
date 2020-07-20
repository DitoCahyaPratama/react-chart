import React, {useState} from 'react'
import { Bar } from 'react-chartjs-2'
import {ReactJsonExcel} from 'react-json-excel'
import data from '../data/data.json'
function BarChart() {
  const labels = data.dt.map(val=>val.label)
  const dataVal = data.dt.map(val=>val.value)
  const [dataChart, setDataChart] = useState({
    labels: labels,
    datasets: [
      {
        label: "Videos Mades",
        backgroundColor: "#ffbe76",
        data: dataVal
      },
    ]
  })
  return (
    <>
      <h3>BarChart Example</h3>

      <Bar
        data={dataChart}
      />
    </>
  )
}

export default BarChart