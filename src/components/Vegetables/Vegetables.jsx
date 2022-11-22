import React from "react";
import products from '../../data/products.json'

export const Vegetables = () => (
  <ul className="vegetables_list">
    {products.map(product => (
      <li key={product.id} className = "vegetables_item"><strong>{product.name}</strong>
      <br></br>
      <img className= "vegetable" src={product.photo_url}></img></li>
      
    ))}
  </ul>
)
