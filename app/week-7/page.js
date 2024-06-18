"use client";
import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {

  const [itemList, setItemList] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }

  function handleSelect(item) {
    let temp = item.name;
    temp = temp.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    temp = temp.split(',')[0].trim();
    setSelectedItemName(temp);
  }

  return (

    <main className="bg-slate-950 p-2 m-2 flex">
        <div className="max-w-sm w-full">
            <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
            <h3 className="text-xl font-bold">Add New Item</h3>
            <NewItem addItem={handleAddItem} />
            <ItemList items={itemList} onItemSelect={handleSelect} />
        </div>
        <div className="max-w-sm w-full">
            <MealIdeas ingredient={selectedItemName} />
        </div>
    </main>
  );
}