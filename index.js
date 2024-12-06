//Question 1: Closure-Based Counter Implementation
const createCounter = () => {
  let count = 0; //  (closure scope)

  // Return an object with methods to interact with 'count'
  return {
    increment: () => {
      count++; // Increment the counter
      console.log("Current count:", count);
    },
    decrement: () => {
      count--; // Decrement the counter
      console.log("Current count:", count);
    },
    display: () => {
      console.log("Current count:", count); // Display the current count
    }
  };
};


const counter = createCounter(); // Create a new counter instance

counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1
counter.display();   // Current count: 1