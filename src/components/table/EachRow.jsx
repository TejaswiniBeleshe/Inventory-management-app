

const EachRow = ({ele,setItems,items,editItems,setEditItems})=>{
    const {name,category,quantity} = ele
 
    const handleDelete = (id)=>{
        const finalItems = items.filter((ele)=>{
            return ele.id !== id
        })
        setItems(finalItems)
    }

    const handleEdit = (id)=>{
        const findItem = items.find(ele=>ele.id === id)
        setEditItems(findItem)
    }

    
    return(
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={()=>handleEdit(ele.id)}>Edit</button>
                <button onClick={()=>handleDelete(ele.id)}>Delete</button>
            </td>
        </tr>
    )

}

export default EachRow