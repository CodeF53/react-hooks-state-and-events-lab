import React from "react";
import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter,setFilter] = useState("All")

  const filteredItems = filter==="All"? items:items.filter((item)=>item.category===filter)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(event)=>setFilter(event.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
