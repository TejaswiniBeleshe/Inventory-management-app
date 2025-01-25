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

  return (
    <>
    <Form items={items} setItems={setItems}/>
    <Table items={items} setItems={setItems}/>
     
    </>
  )
}

export default App
