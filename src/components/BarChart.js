import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

import ExcelJS from 'exceljs/dist/es5/exceljs.browser'
import { saveAs } from 'file-saver'

import { Button } from 'antd';
import data from '../data/data.json'
function BarChart() {
  const labels = data.dt.map(val => val.label)
  const dataVal = data.dt.map(val => val.value)
  const fields = {
    "label": "label",
    "value": "value"
  }
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
  const saveAsExcel = async () => {
    const wb = new ExcelJS.Workbook()
    // create new sheet with pageSetup settings for A4 - landscape
    const ws = wb.addWorksheet('sheet', {
      pageSetup:{paperSize: 9, orientation: 'landscape'}
    })

    // adjust pageSetup settings afterwards
    ws.pageSetup.margins = {
      left: 0.7, right: 0.7,
      top: 0.75, bottom: 0.75,
      header: 0.3, footer: 0.3
    };

    
    console.log(data)
    
    const title = ws.addRow(['Nama', 'Jumlah'])
    title.font = { bold: true }

    data.dt.map((val, key) => {
      ws.addRow([val.label,val.value])
    })

    const buf = await wb.xlsx.writeBuffer()
    saveAs(new Blob([buf]), 'abc.xlsx')
  }
  return (
    <>
      <h3>BarChart Example</h3>
      <Button type="primary" onClick={() => saveAsExcel()}>
        {/* <JsonToExcel data={data.dt}
          filename="test"
          fields={fields} /> */}
          test
      </Button>
      <Bar
        data={dataChart}
      />
    </>
  )
}

export default BarChart