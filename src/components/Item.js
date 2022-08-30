import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [incart, toggleCart] = useState(false)
  return (
    <li className={incart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>{toggleCart(!incart)}}>{incart?"Remove from":"Add to"} Cart</button>
    </li>
  );
}

export default Item;
