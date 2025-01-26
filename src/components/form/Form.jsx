import { useEffect } from "react";
import { useState } from "react";


const capitalize = (letter)=>{
    let res = letter.split('')
    res[0] = res[0].toUpperCase()
    console.log(res)
    return res.join('') 

}

const Form = ({ items, setItems, editItems, setEditItems }) => {
  
    
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!editItems) {
        setItems([...items, { id: Date.now(), name: capitalize(itemName),category:capitalize(category), quantity }]);
      } else {
        const updatedItems = items.map((ele) =>
          ele.id === editItems.id
            ? { ...ele, name:capitalize(itemName), category:capitalize(category), quantity }
            : ele
        );
        setItems(updatedItems);
        setEditItems("");
      }
      setItemName("");
      setCategory("");
      setQuantity("");
    };
  
    useEffect(() => {
      if (editItems) {
        const { name, category, quantity } = editItems;
        setItemName(name);
        setCategory(category);
        setQuantity(quantity);
      }
    }, [editItems]);
  
    return (
      <div className="d-flex justify-content-center align-items-center">
        <form
          className="p-4 border rounded shadow-sm"
          style={{ maxWidth: "400px", width: "100%" }}
          onSubmit={handleFormSubmit}
        >
          <h5 className="text-center mb-4">{editItems ? "Edit Item" : "Add Item"}</h5>
          <div className="mb-3">
            <label htmlFor="item-name" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              id="item-name"
              className="form-control"
              placeholder="Add item"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Add category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min={1}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary add-btn w-100">
            {editItems ? "Update" : "Add"}
          </button>
        </form>
      </div>
    );
  };
  
  export default Form;