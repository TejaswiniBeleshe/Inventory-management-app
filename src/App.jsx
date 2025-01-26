import { useState } from 'react'

import './App.css'
import Form from './components/form/form'
import Table from './components/table/Table'



function App() {
  const [items,setItems] = useState([
    { id: 1, name: "Iphone", category: "Electronics", quantity: 15 },
    { id: 2, name: "Sketch Pens", category: "Stationery", quantity: 5 },
    { id: 3, name: "Laptop", category: "Electronics", quantity: 8 },
  ])
  const [editItems,setEditItems] = useState('')

  return (
    <>
    <h2>Inventory Management App</h2>
    <Form items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>
    <Table items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>
     
    </>
  )
}

export default App
