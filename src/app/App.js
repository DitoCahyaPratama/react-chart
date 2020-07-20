import React from 'react'
import { Card } from 'antd';
import { Bar } from '../components'
import './App.css'
import 'antd/dist/antd.css';

export default function App() {
  return (
    <div className="container">
      <Card title="Basic Chart" bordered={false} style={{ width: 600 }}>
        <Bar />
      </Card>
    </div>
  )
}
