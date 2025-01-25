import { useState } from "react"
import EachRow from "./EachRow"

const Table = ()=>{
    const [items,setItems] = useState([
        { id: 1, name: "Laptop", category: "Electronics", quantity: 15 },
        { id: 2, name: "Notebook", category: "Stationery", quantity: 5 },
        { id: 3, name: "Mouse", category: "Electronics", quantity: 8 },
      ])
    return(
        <table>
            <thead>
                <tr>
                    <th>Item-NAME</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items?items.map((ele)=><EachRow key={ele.id} ele={ele}/>):"Please enter items"
                }

            </tbody>
        </table>
    )
}
export default Table