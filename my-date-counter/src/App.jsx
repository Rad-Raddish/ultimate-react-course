import { useState, useRef } from "react";
import "./App.css";

// vv incorrect code vv
const dateObj = new Date(); //* it does not matter if this is const or that I moved this out of App(), the value is not protected during a React render
// ^^

function App() {
  // vv incorrect code vv
  // ^^ incorrect code ^^

  //** example of doing it correctly code */
  const [aNewDate] = useState(() => new Date()); //* this will protect the date object
  console.log("aNewDate:", aNewDate);
  const dateRef = useRef(new Date()); //* This is ideal if the date shouldn’t trigger re-renders when it changes.
  console.log("dateRef:", dateRef.current);

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  console.log("App() count: ", count);

  //* Instead of mutating with setDate, create a new Date object from the protected date object (aka dateObj)
  const newDate = new Date(dateObj);
  console.log("newDate:", newDate);
  newDate.setDate(newDate.getDate() + count);
  console.log("newDate after:", newDate);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  // function updateStep() {} //* removed
  // function updateCD() {}   //* removed

  console.log("");
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        <br />
        {/*vv the 'right' way vv*/}
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
        {/*^^ the 'right' way ^^*/}
        {/*vv the 'wrong' way vv*/}
        {/*<button onClick={() => updateStep(-1)}>down</button>
        Step: {step}
        <button onClick={() => updateStep(1)}>up</button>*/}
        {/*^^ the 'wrong' way ^^*/}
      </div>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />{" "}
      <div className="card">
        {/*vv the 'right' way vv*/}
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {step}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        {/*^^ the 'right' way ^^*/}
        {/*vv the 'wrong' way vv*/}
        {/*<button onClick={() => updateCD(-1)}>down</button>
        Count: {count}
        <button onClick={() => updateCD(1)}>up</button>*/}
        {/*^^ the 'wrong' way ^^*/}
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>ReSET</button>
        </div>
      ) : null}
      <p className="read-the-docs">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{newDate.toDateString()}</span>
      </p>
    </>
  );
}

export default App;
