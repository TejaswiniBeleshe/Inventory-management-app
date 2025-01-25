

const EachRow = ({ele})=>{
    const {name,category,quantity} = ele
 
    const handleDelete = (id)=>{

    }
    return(
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>
                <button>Edit</button>
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </td>
        </tr>
    )

}

export default EachRow