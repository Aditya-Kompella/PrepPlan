/*
**Video Title:** JavaScript Scope Chain Explained with Code Examples
The primary code example discussed throughout the video demonstrates 
    how nested functions access variables from their outer lexical environments,
    creating the **Scope Chain**.

javascript
// Global Execution Context
*/
function a() {
  // Function a's local memory
  var b = 10;

  // Function c is lexically inside a
  function c() {
    // Function c's local memory
    // JavaScript engine searches here first for 'b'
    // If not found, it uses the Scope Chain to look in 'a'
    console.log(b);
  }

  c(); // Invoking function c (0:38 - 2:40)
}

a(); // Invoking function a (0:27)

// console.log(b);
// This would throw 'ReferenceError: b is not defined'
// because 'b' is not in the global scope (3:14)

/**Key Takeaways:**
* **Lexical Environment (7:09):** 
Every execution context gets a reference to its parent's lexical environment.
 This link is determined by where the code is physically written.
* **Scope Chain (13:10):** 
The engine searches for a variable in the local memory.
 If not found, it follows the reference to the parent's environment, 
 continuing until it reaches the global scope or hits `null`, resulting in a `ReferenceError`.
* **Visualization (15:27):** 
You can observe this chain in the browser's debugger under the 'Scope' section, 
showing the local and closure (outer) scopes.
*/

const globalVar = "Global";

function outer() {
  const outerVar = "Outer";

  function inner() {
    const innerVar = "Inner";

    console.log(innerVar); // Current scope
    console.log(outerVar); // Parent scope
    console.log(globalVar); // Global scope
  }

  inner();
}

outer();

const x = 10;

function test() {
  const y = 20;

  function demo() {
    console.log(x);
    console.log(y);
    console.log(z);
  }

  demo();
}

test();
