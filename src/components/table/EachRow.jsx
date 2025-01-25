

const EachRow = ({ele})=>{
    const {name,category,quantity} = ele
 
    return(
        <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>
                <button>Edit</button>
                <button onClick={}>Delete</button>
            </td>
        </tr>
    )

}

export default EachRow