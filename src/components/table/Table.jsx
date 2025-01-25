import { useState } from "react"
import EachRow from "./EachRow"
import { useEffect } from "react";



const Table = ({items,setItems,editItems,setEditItems})=>{
    const [allCategories,setAllCategories] = useState([])
    const [filterCat,setFilterCat] = useState('');
    const [original,setOriginal] = useState([...items])
    const set = new Set();

    useEffect(()=>{
         items.forEach((ele)=>{
            set.add(ele.category)
         })
         let arr = []
         for(let ele of set){
            arr.push(ele)

         }
         setAllCategories(arr)

    },[items])

    useEffect(()=>{
        if(filterCat){
            let filtered = items.filter(ele=>{
                return ele.category === filterCat
            })
            setOriginal(filtered)
        }else{
            setOriginal(items)
        }


    },[filterCat])


    
    return(
        <>
        <select name="allcat" id="allcat" value={filterCat} onChange={(e)=>setFilterCat(e.target.value)}>
        <option value="">select</option>
            {
                allCategories.map(ele=>{
                    return <option value={ele}>{ele}</option>
                })
                
            }      
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
                {   !original?
                    items?items.map((ele)=><EachRow key={ele.id} ele={ele} items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>):"Please enter items"
                    :original?original.map((ele)=><EachRow key={ele.id} ele={ele} items={items} setItems={setItems} setEditItems={setEditItems} editItems={editItems}/>):""
                }

            </tbody>
        </table>
        </>
    )
}
export default Table