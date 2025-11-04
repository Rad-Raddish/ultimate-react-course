import { useState } from "react";

//* STATE is Internal data, owned by component, think of it as memory
//*  are updated by component itself
//*  updating state causes a re-render
//*  used to make components interactive

//* PROPS is External data owned by the parent component
//*  (also known as function parameters from a purely js point of view)
//*  are read-only (in react, but not so in Angular)
//*  recieving new props causes component to re-render (usually when parent's state is updated)
//*  used by parent to configure child component (aka pass it "settings")

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Underwear 🧳", quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🎉 Far Away 👍 </h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //* add aka submit the form
  function handleSubmit(e) {
    e.preventDefault(); //* web pages will by default reload the page on Form submit, disable this

    if (!description) return; //*safeguard against an empty submission

    //* how do we update PackingList with the newItem if Form is not a parent, but a sibling, of PackingList? -> This is state managment in the next section
    const newItem = { description, quantity, packed: false, id: Date.now() }; //* Date.now is just a quick and dirty way to make a uid

    setDescription(""); //* reset to initial state
    setQuantity(1);
  }

  return (
    // don't enter in "handleSubmit() because React will call it when the event happens"
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 😘 Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add </button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        [{item.quantity}] {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>"." You have X items on your list, and you already packed X (x%)</em>
    </footer>
  );
}
