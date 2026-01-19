import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";

//**** STATE is Internal data, owned by component, think of it as memory
//*  are updated by component itself
//*  updating state causes a re-render
//*  used to make components interactive

//**** Derived State
//* instead of useState referencing other State (thus causing cascading re-renders per) just use constants that reference the current STATE

//*** PROPS is External data owned by the parent component
//*  (also known as function parameters from a purely js point of view)
//*  are read-only (in react, but not so in Angular)
//*  recieving new props causes component to re-render (usually when parent's state is updated)
//*  used by parent to configure child component (aka pass it "settings")

const initialItems = [
  { id: 1, description: "Passports 📘", quantity: 2, packed: false },
  { id: 2, description: "Underwear 🩲", quantity: 12, packed: false },
  { id: 3, description: "Chargers ⚡", quantity: 2, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems); //* STATE
  //const numItems = items.length; //* Derived STATE (example, it makes more sense to add this to a child component)

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  );
}


