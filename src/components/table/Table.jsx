import { useState } from "react"
import EachRow from "./EachRow"
import { useEffect } from "react";
import "../../App.css"
const Table = ({ items, setItems,setEditItems }) => {
    const [allCategories, setAllCategories] = useState([]);
    const [filterCat, setFilterCat] = useState("");
    const [filteredItems, setFilteredItems] = useState([...items]);
    const [sortQun,setSortQun] = useState(false);
    // const [sorted,setSorted] = useState([])
    
    const handleQuantityOrder = () => {
        if(sortQun){
           items.sort((a,b)=>b.quantity-a.quantity);
        }
    };

    useEffect(()=>{
       
        handleQuantityOrder()
    },[sortQun])
  

    useEffect(() => {
      const categories = [...new Set(items.map((ele) => ele.category))];
      setAllCategories(categories);
    }, [items]);
  
    useEffect(() => {
      if (filterCat) {
        const filtered = items.filter((ele) => ele.category === filterCat);
        setFilteredItems(filtered);
      } else {
        setFilteredItems(items);
      }
    }, [filterCat,items]);
  
    
  
    return (
      <div className="mx-5 mt-5 px-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <label htmlFor="filter" className="form-label me-2 mb-0">
              Filter by Category
            </label>
            <select
              id="filter"
              className="form-select me-3"
              style={{ width: "200px" }}
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value)}
            >
              <option value="">All Categories</option>
              {allCategories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <button className="btn sort-btn" onClick={()=>setSortQun((prev)=>!prev)}>
            Sort Quantity
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((ele) => (
              <EachRow
                key={ele.id}
                ele={ele}
                items={items}
                setItems={setItems}
                setEditItems={setEditItems}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  