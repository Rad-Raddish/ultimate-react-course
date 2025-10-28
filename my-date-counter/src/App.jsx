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

  const [step, setStep] = useState(0);
  const [count, setCount] = useState(2);
  console.log("App() count: ", count);

  //* Instead of mutating with setDate, create a new Date object from the protected date object (aka dateObj)
  const newDate = new Date(dateObj);
  newDate.setDate(newDate.getDate() + count);
  console.log("newDate:", newDate);
  const [targetDate, setTargetDate] = useState(newDate.toDateString()); //* initial value set, this will never update again, you have to use the setTargetDate
  console.log("App() targetDate before:", targetDate);

  function updateStep(inc) {
    setStep((s) => s + inc);
  }

  function updateCD(inc) {
    console.log("updateCD() count before: ", count);
    setCount((c) => c + inc);
    console.log("updateCD() count after: ", count);

    const localNewDate = new Date(dateObj);
    console.log(
      "updateCD() localNewDate before: ",
      localNewDate.toDateString()
    );
    localNewDate.setDate(localNewDate.getDate() + count);
    console.log("updateCD() localNewDate after: ", localNewDate.toDateString());

    console.log("updateCD() targetDate before:", targetDate);
    setTargetDate(localNewDate.toDateString());
    console.log("updateCD() targetDate after:", targetDate);
  }

  console.log("App() targetDate after:", targetDate);

  console.log("");
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => updateStep(-1)}>down</button>
        Step: {step}
        <button onClick={() => updateStep(1)}>up</button>
      </div>
      <div className="card">
        <button onClick={() => updateCD(-1)}>down</button>
        Count: {count}
        <button onClick={() => updateCD(1)}>up</button>
      </div>
      <p className="read-the-docs">
        {count} days from today is {targetDate}
        {/* targetDate.toDateString() */}
      </p>
    </>
  );
}

export default App;
