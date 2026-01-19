import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //* add aka submit the form
  function handleSubmit(e) {
    e.preventDefault(); //* web pages will by default reload the page on Form submit, disable this

    if (!description) return; //*safeguard against an empty submission

    //* how do we update PackingList with the newItem if Form is not a parent, but a sibling, of PackingList? -> This is state managment in the next section
    const newItem = { description, quantity, packed: false, id: Date.now() }; //* Date.now is just a quick and dirty way to make a uid
    console.log("newItem", newItem);

    onAddItems(newItem);

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