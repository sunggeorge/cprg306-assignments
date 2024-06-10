"use client";
import { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

export default function Page() {

  const [itemList, setItemList] = useState(itemsData);

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }

  return (

    <main className="bg-slate-950 p-2 m-2">
        <div className="max-w-sm w-full">
            <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
            <h3 className="text-xl font-bold">Add New Item</h3>
            <NewItem addItem={handleAddItem} />
            <ItemList items={itemList} />
        </div>
    </main>
  );
}