import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  //* create a new div element classname of actons and give it options, sort the options using STATE
  const [sortBy, setSortBy] = useState("input"); //* STATE


  //* however we don't want to create a new array (and obviously not mutate it) we want to sort the exsisting array
  let sortedItems; //* Derived STATE


  //* Self Note: it might be best to create an array to derive all possible values of sortBy, and reference that, so as to avoid errors
  if (sortBy === 'input') { sortedItems = items; };
  //* so now instead of sorting the items we recieved from the parent compoenent like this: {items.map((item) => ()} 
  //* now we will be sorting a Derived STATE based off that prop  {sortedItems.map((item) => ()}
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)); //* NOTE!!!!



  //* NOTE! .sort() is a mutation, but .slice() makes a new copy forst
  //* so that allows us to create a new array and be React rule compliant
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by the input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear</button>
      </div>
    </div>
  );
}
