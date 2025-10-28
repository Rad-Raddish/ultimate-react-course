//****************************************************************************************************************//
//************************************************ chapter header ************************************************//
//* notes
//* npm start to run the app
//* ctrl + c to stop the app
//* the hotswapping module breaks so a hard refresh on the browser will sometimes fix errors if you see them
//* open the console in the browser to see console logs and errors or if it's just not running, very helpful

//****************************************************************************************************************//
//* subsection
//****************************************************************************************************************//

import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import pizzaData from "./data.js";
import "./index.css";

async function parsePizzaData(data) {
  // simulate async delay (remove if not needed)
  await new Promise((resolve) => setTimeout(resolve, 100));
  // transform/filter as needed
  return data.map((p) => ({ ...p, name: p.name.toUpperCase() }));
}

//****************************************************************************************************************//
//* Rules
//****************************************************************************************************************//
//* function names MUST start with a capital letter
//* components must return some markup, like a single element, so wrap in a div or use a fragment <>
//* never NEST functions inside of eachother
//* declare all functions at the top level
//* always close tags, even if self closing like <img />
//* use camelCase for HTML attributes like tabIndex and className instead of class
//* comments inside JSX need to be inside curly braces {/* comment */}
//* JSX can only return a single parent element, so wrap in a <div> or use a fragment <>

//****************************************************************************************************************//
//* Shortcuts
//****************************************************************************************************************//
//* MOVE LINE: at the top nav of VS Code > Selection, "Move Line Up" or "Move Line Down" are useful: Alt + Up/Down Arrow

function App() {
  return (
    <div className="container">
      <h1> Hello React!</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {}; // the above was just an example of inline styling, not recommended

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // ASYNC example with useEffect and useState
  const [parsedData, setParsedData] = useState([]);
  console.log("parsedData:", parsedData);
  useEffect(() => {
    let mounted = true;
    // call top-level async parser and update state when done
    parsePizzaData(pizzaData).then((processed) => {
      if (mounted) setParsedData(processed);
    });
    return () => {
      mounted = false;
    };
  }, []);

  console.log(pizzaData);

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* conditional with Fragments */}
      {/* Remember were in JSX, we can only return one DOM element and we could wrap everything in a Div but that doesn't solve every situation, */}
      {/* ... you might not want to associat everything in a function with the same parent, but it also might not make sense to break it out as it's own function,*/}
      {/* ... that's where Fragments come in. Fragments look like this in shorthand: <></> , or if a key() is required, by longhand (via import React): <React.Fragment>*/}
      {/* that creates an non-esistant/invisible DOM element */}

      {numPizzas > 0 ? (
        // <React.Fragment key='abc123>
        <React.Fragment>
          {/* ^^Longhand^^ OR vvShorthandvv */}
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzas.map((pizzaParam) => (
                <Pizza pizzaObj={pizzaParam} key={pizzaParam.name} />
              ))}
            </ul>
          </>
          {/* vvLonghandvv OR ^^Shorthand^^ */}
        </React.Fragment>
      ) : null}

      {/* conditional rendering with Ternaries */}
      {/* Remember were in JSX, this is 'javascript mode' inside the DOM, this means we can't use an if/else because we must return a value. If you did use if/else its going to throw an 'unexpected token' error*/}
      {/*  */}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizzaParam) => (
            <Pizza2 pizzaObj={pizzaParam} key={pizzaParam.name} />
          ))}
        </ul>
      ) : null}

      {/* conditional rendering */}
      {/* evaluate number of pizzas against a true/false expression, if true render DOM if false, */}
      {/* ... return the left side operation but because its a Boolean we don't render that to the DOM */}

      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizzaParam) => (
            <Pizza2 pizzaObj={pizzaParam} key={pizzaParam.name} />
          ))}
        </ul>
      )}

      {/* rendering from data */}

      <ul className="pizzas">
        {pizzas.map((pizzaParam) => (
          //   <Pizza key={pizzaParam.name} pizzaParam={pizzaParam} />
          <Pizza2 pizzaObj={pizzaParam} key={pizzaParam.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza2(props) {
  // placeholder for previous example code
}

// function Pizza(props) {
function Pizza({ pizzaObj }) {
  //* Now lets practice destructuring by pulling pizzaObj out of props directly in the function's props,
  //* Remmeber that this name must match what is being passed into the prop from the parent component
  console.log(pizzaObj);
  //* CTRL + D to select the same word multiple times for editing

  //   if (pizzaObj.soldOut) {return null;} //* this is replaced by the ternary below

  return (
    // <li className="pizza">
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/* <img src={photoName} alt={pizzaParam.name} />*/}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //* we can use if/else statements outside of the return
  //* this allows us to return different markup based on conditions
  //* example:
  if (!isOpen) {
    return (
      <p>
        We're closed now. Come back between {openHour}:00 and {closeHour}:00.
      </p>
    );
  }

  //* we can use short circuiting to only show the order div if open
  //* React will ignore false values so if isOpen is false nothing shows, this is because it does not render Boolean values to the DOM
  //* if this was not a boolean then it would show the value of the left side of the && operator

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're closed now. Come back between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

//* don't forget the curly brackets or else it won't work
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're currently open until {openHour}:00 to {closeHour}:00.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
