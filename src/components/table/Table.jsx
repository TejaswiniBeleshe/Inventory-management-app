import { useState } from "react"
import EachRow from "./EachRow"

const Table = ({items,setItems})=>{
    
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