export default function Item({ item, onDeleteItem, onToggleItem }) {
  //* a controlled element means it's value is defined by state and has an event handler that updates the state accordingly
  //* the function is going to change the packed value of the item state, and this function is coming from the parent component and updates the state that we also get from the parent
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        [{item.quantity}] {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
  //* we do not want to recieve the event, but rather the ID of the current item
  //* so need to create a new function of onDeleteItem and pass it the ID
  //* the pointer part of this ( () => ) means it only gets triggered when the event happens and then calls the function
}
