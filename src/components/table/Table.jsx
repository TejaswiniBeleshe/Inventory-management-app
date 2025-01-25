import { useState } from "react"
import EachRow from "./EachRow"

const Table = ({items,setItems,editItems,setEditItems})=>{
    
    return(
        <>
        <select name="" id="">
            <option value=""></option>
        </select>
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
                    items?items.map((ele)=><EachRow key={ele.id} ele={ele} items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>):"Please enter items"
                }

            </tbody>
        </table>
        </>
    )
}
export default Table