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

    <main className="bg-slate-950">
        <div className="m-4">
            <h2 className="text-3xl font-bold m-2">Shopping List</h2>
            <NewItem addItem={handleAddItem} />
            <ItemList items={itemList} />
        </div>
    </main>
  );
}