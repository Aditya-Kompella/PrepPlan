/**

DEFINITION: Hoisting is the behavior in JavaScript where the engine allocates memory
for variables and functions during the 'Memory Creation Phase' of the Execution
Context, even before the actual code is executed line-by-line. */
// 1. Function Declaration (Hoisted completely)
// You can invoke this before its definition because the whole function
// is copied into the memory.
getName(); // Output: "Namaste JavaScript"

function getName() {
  console.log("Namaste JavaScript");
}

// 2. Variable Hoisting (undefined)
// 'x' is allocated memory but initialized as 'undefined' by the engine.
// That is why you get 'undefined' instead of an error.
console.log(x); // Output: undefined
var x = 7;

// 3. Arrow Function / Variable as Function
// Arrow functions behave like variables. They are assigned 'undefined'
// during the memory phase, not the function code.
// This will throw a TypeError: "getNameArrow is not a function"
getNameArrow();

var getNameArrow = () => {
  console.log("Namaste Arrow Function");
};

/**

KEY TAKEAWAY:
Variables declared with 'var' are hoisted and initialized as 'undefined'.
Function Declarations are hoisted fully (the entire function body is stored).
Arrow functions and variables defined with 'var' act as variables and remain
'undefined' during the memory phase, leading to errors if invoked early.
If a variable is never declared, attempting to access it results in a
'ReferenceError: ... is not defined'. 
*/
