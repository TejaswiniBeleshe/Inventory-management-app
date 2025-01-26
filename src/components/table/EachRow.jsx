import "../../App.css"

const EachRow = ({ ele, setItems, items, setEditItems }) => {
    const { id, name, category, quantity } = ele;
  
    const handleDelete = () => {
      const updatedItems = items.filter((item) => item.id !== id);
      setItems(updatedItems);
    };
  
    const handleEdit = () => {
      const itemToEdit = items.find((item) => item.id === id);
      setEditItems(itemToEdit);
    };
  
    return (
      <tr className={quantity < 10 ? "table-danger" : ""}>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>
          <button className="btn edit-btn btn-sm me-2" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn delete-btn btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default EachRow;
  