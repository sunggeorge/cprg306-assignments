import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className="bg-black">
        <div className="bg-slate-950">
            <h1 className="font-bold text-3xl m-2">Shopping List</h1>
            <ItemList />
        </div>
    </main>
  );
}