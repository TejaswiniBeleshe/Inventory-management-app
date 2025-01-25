import { useState } from 'react'

import './App.css'
import Form from './components/form/form'
import Table from './components/table/Table'



function App() {
  const [items,setItems] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 15 },
    { id: 2, name: "Notebook", category: "Stationery", quantity: 5 },
    { id: 3, name: "Mouse", category: "Electronics", quantity: 8 },
  ])
  const [editItems,setEditItems] = useState('')

  return (
    <>
    <Form items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>
    <Table items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>
     
    </>
  )
}

export default App
