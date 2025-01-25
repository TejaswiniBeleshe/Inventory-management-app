import { useEffect } from "react";
import { useState } from "react";

const Form = ({items,setItems,editItems,setEditItems})=>{
    const [itemName,setItemName] = useState('')
    const [category,setCategory] = useState('')
    const [quantity,setQuantity] = useState(1);
    
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(itemName,category,quantity)
        if(!editItems){
            setItems([...items,{id:Date.now(),name:itemName,category,quantity}])
       
        }else{
            let findAndUpdate = items.map((ele)=>{
                if(editItems.id === ele.id){
                    return {...ele,name:itemName,category,quantity}
                }
                return ele;
            })
            setItems(findAndUpdate);
            setEditItems('')
        }
        setItemName('')
        setCategory('')
        setQuantity('')  
    }


    useEffect(()=>{
        if(editItems){
            let {name,category,quantity} = editItems
            setCategory(category)
            setItemName(name)
            setQuantity(quantity)
        }
    },[editItems])
    
    console.log(items)
    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="item-name">Item Name</label>
            <input type="text" name="item-name" id="item-name" value={itemName} onChange={(e)=>setItemName(e.target.value)}/><br/>
            <label htmlFor="category">Category</label>
            <input type="text" name="item-name" id="item-name" value={category} onChange={(e)=>setCategory(e.target.value)}/><br/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} min={1} /><br/>
            <button type="submit">{editItems?"Reset":"Add"}</button>
        </form>
    )
}
export default Form