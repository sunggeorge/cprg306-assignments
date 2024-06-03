
"use client";
import Item from "./item.js";
import productsData from "./items.json";
import { useState } from "react";


export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");
  const [products, setProducts] = useState(productsData.sort((a, b) => a.name.localeCompare(b.name)));
  let old_cat = "";

  const clickEvent = (e) => {

    setSortBy(e.target.name)
    let temp = e.target.name;
    switch (temp) {
      case "name":
        setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "category":
        setProducts([...products].sort((a, b) => a.category.localeCompare(b.category)));
        break;
      case "gcategory":
        setProducts([...products].sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name)));
        break;
    }
  
  }

  return (
    <div>
    <label for="sort">Sort by:</label>
    <button name="name"
      className= {sortBy == 'name' ? 'week-5-active' : 'week-5-inactive'}
      onClick={clickEvent}>Name</button>
    <button name="category" 
      className= {sortBy == 'category' ? 'week-5-active' : 'week-5-inactive'}
      onClick={clickEvent}>Category</button>
    <button name="gcategory" 
      className= {sortBy == 'gcategory' ? 'week-5-active' : 'week-5-inactive'}
      onClick={clickEvent}>Grouped Category</button>


    <ul>
    {products.map((item) => {
      const isNewCategory = old_cat != item.category;
      const isGroupMode = sortBy == "gcategory";
      old_cat = item.category;
      return (
        <>
          {isGroupMode && isNewCategory && (
              <p className="text-xl font-bold capitalize">{item.category}</p>
          )}
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        </>
      );
    })}
    </ul>


    </div>

  );
}
