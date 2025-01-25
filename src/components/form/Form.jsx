import { useState } from "react";

const Form = ()=>{
    const [itemName,setItemName] = useState('')
    const [category,setCategory] = useState('')
    const [quantity,setQuantity] = useState(1)
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(itemName,category,quantity)

    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="item-name">Item Name</label>
            <input type="text" name="item-name" id="item-name" value={itemName} onChange={(e)=>setItemName(e.target.value)}/><br/>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={(e)=>setCategory(e.target.value)}/><br/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min={1} /><br/>
            <button type="submit">Add</button>
        </form>
    )
}
export default Form