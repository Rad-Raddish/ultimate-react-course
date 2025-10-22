//****************************************************************************************************************//
//***********************************************    Async JS    *************************************************//
//* fetch api
//* NODE JS 18+ has fetch built in

//* fetch returns a promise
//* we can use .then() to handle the response when it comes back
//* .then() also returns a promise so we can CHAIN them
//* the first .then() gets the response object, we need to call .json() on it to get the data we want
//* .json() also returns a promise so we need another .then() to handle the data
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("I am first!");

//****************************************************************************************************************//
//************************************************    Await    ***************************************************//

//* this time it will wait for the fetch to finish before moving on to the next line
async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos); //* returns a promise because getTodos is an async function
console.log("after async function");
