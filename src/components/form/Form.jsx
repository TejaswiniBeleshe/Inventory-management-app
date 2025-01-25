import { useState } from "react";

const Form = ()=>{
    const [itemName,setItemName] = useState('')
    
    const handleFormSubmit = (e)=>{
        e.preventDefault();


    }
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="item-name">Item Name</label>
            <input type="text" name="item-name" id="item-name"/>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category"/>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" id="quantity"/>
            <button type="submit">Add</button>

        </form>
    )
}