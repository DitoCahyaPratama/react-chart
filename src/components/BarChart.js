import React, {useState} from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Videos Mades",
        backgroundColor: "#ffbe76",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Subscriptions",
        backgroundColor: "#badc58",
        data: [5, 9, 40, 51, 26, 105, 30]
      }
    ]
  })
  return (
    <>
      <h3>BarChart Example</h3>
      <Bar
        data={data}
      />
    </>
  )
}

export default BarChart