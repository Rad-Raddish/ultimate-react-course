import { useState } from "react";

const data = ["Learn React 👍", "Build a React App 🧠", "Master React Hooks 🏆"];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
      <StepMessage step={2}> <p>Pass in content</p><p>🧠</p></StepMessage>
      <StepMessage step={3}><p>Read the children prop</p><p>👍</p></StepMessage>
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
    //* example with callback value, this is safer to use when you want to mutate the state based on current state because it references current state via the callback
    //* we define the var of the callback inside (), in this case it's (s), and the s is defined by the current State of setStep
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
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

          
          <StepMessage step={step}> {data[step-1]}
            <div className="buttons">
              <Button backgroundColor={'#e7e7e7e7'} textColor={'#333'} onClick={() => alert(`Learn how to ${data[step-1]}`)}
                >Learn How</Button>
            </div>
          </StepMessage>
          

          <div className="buttons">
            {/*  */}
            {/* Multiple ways to skin a cat, here's us making a button component with parameters for it's text, handler and emoji */}
            {/* <Button textColor='#fff' backgroundColor='#7950f2' copy='Previous' onClick={handlePrevious} emoji='👈'/>*/}
            {/* <Button textColor="#fff" backgroundColor="#7950f2" copy="Next" onClick={handleNext} emoji='👉' />  */}
            {/*  */}
            {/* The above is getting excessive in how many ways its getting props, but we can streamline it by enclosing the unique elements inside the button's HTML */}
            <Button textColor='#fff' backgroundColor='#7950f2' onClick={handlePrevious}><span>👈</span>Previous</Button>
            <Button textColor="#fff" backgroundColor="#7950f2" onClick={handleNext}>Next <span>👉</span></Button>
            {/*  */}
            {/* CHILDREN PROP */}
            {/* The above is getting excessive in how many ways its getting props, but we can streamline it by enclosing the unique elements inside the button's HTML */}
          </div>
        </div>
      )}
    </>
    // </div>
  );
}

function StepMessage({step, children}){
  return(
    <div className="message">
      <h3>Step {step}</h3>
    {children}</div>
  )
}

function Button({textColor, backgroundColor, onClick, children}) {
  // children is a predefined keyword in react, it is an object that contains the content that's inside the html element instance
  // children is how we make components truely reusable
  return (
    <button 
      style={{ backgroundColor:backgroundColor, color:textColor }}
      onClick={onClick}
    >
      {children}
    </button>
    
  );
}