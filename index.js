// 1) The receivesAFunction function
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// 2) The returnsANamedFunction function
function returnsANamedFunction() {
  // Return a named function
  function namedFunction() {
    console.log("I am a named function.");
  }
  return namedFunction;
}

// 3) The returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function () {
    console.log("I am an anonymous function.");
  };
}

// Test cases

// Testing receivesAFunction with a simple callback
receivesAFunction(function () {
  console.log("Callback function was called.");
});
// Output: "Callback function was called."

// Testing returnsANamedFunction
const namedFunc = returnsANamedFunction();
namedFunc(); // Output: "I am a named function."

// Testing returnsAnAnonymousFunction
const anonFunc = returnsAnAnonymousFunction();
anonFunc(); // Output: "I am an anonymous function."
