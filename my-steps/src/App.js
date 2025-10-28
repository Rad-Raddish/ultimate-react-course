import { useState } from "react";

const data = ["Learn React *", "Build a React App *", "Master React Hooks"];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //* useState can only be used at the top level of a React function component,
  //* useState cannot go inside loops, conditions, or nested functions
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "John", age: 30 });

  function handlePrevious() {
    //* simple example:
    // if (step > 1) {
    //   setStep(step - 1);
    // }

    //* example with callback value, this is safer to use when you want to mutate the state based on current state because it references current state via the callback
    //* we define the var of the callback inside (), in this case it's (s), and the s is defined by the current State of setStep
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    //* simple example:
    // if (step < 3) {
    //   setStep(step + 1);
    // }

    //* example with callback value, this is safer to use when you want to mutate the state based on current state because it references current state via the callback
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  //* No 'addEventListener' used - just inline event handlers like onClick, don't forget that JSX uses camelCase!

  //* example of template literals to conditionally apply a class
  //* <div className={`${step >= 1 ? "active" : ""}`}>1</div>

  //* we want to render two visual components (Within this 'component app' so lets use a fragment),
  //* remember, a fragment is declared with <> and </> and allows us to group multiple elements without adding extra nodes,
  //* like the (commented out) div in the below example

  return (
    // <div>
    <>
      {/* simple example: using the ! operator to toggle the isOpen state, this is flexible because it's based on the current state */}
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      {/* ex using callback... we define the var of the callback inside (), in this case it's (is), and this is defined by the current State of setIsOpen and then modified by the pointer to !is */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* template literal example */}
            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div> */}{" "}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {data[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
    // </div>
  );
}
