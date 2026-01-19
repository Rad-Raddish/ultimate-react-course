export default function Stats({ items }) {
  //* in the case of nothing being added to our packing items list
  if (!items.length) {
    return (
      <footer className="stats">
        {<em>Time to get started! click ADD to start adding some items to your packing list 🧳</em>}
      </footer>
    );
  }

  const numItems = items.length; //* Derived STATE
  const numPacked = items.filter((item) => item.packed).length; //* Derived STATE
  const percentage = Math.round((numPacked / numItems) * 100); //* Derived the derived STATEs
  return (
    <footer className="stats">
      {percentage === 100 ? "You got everything ready to go!✈️" : `🧳 You have [${numItems}] items on your list, and you already packed ${numPacked} (${percentage}%)`}
      {/* <em>🧳 You have [{numItems}] items on your list, and you already packed {numPacked} ({percentage}%)</em> */}
    </footer>
  );
}
