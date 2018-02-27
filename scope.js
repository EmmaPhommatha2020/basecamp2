             
             //02 / 01 / 18 / basecamp2//scope //mini project//
// scope is location.
// global scope is outside of the function can be accessed anywhere in the code.
// local scope is inside of the function and can be accessed within the function.
             

// Instructions
// These problem are designed to give you a better understanding of scope related to variables and functions.Follow the instructions below but don't delete anything when you go to the next step.

// Step 1
// Create a variable called globalName and assign it your name as a string.
// Create a function called myName that console.logs "Hi, my name is " + globalName.
// Invoke myName.You should now see 'Hi, my name is ' plus the value you have assigned to globalName.

// Notice how we didn't have to pass globalName as an argument in our function declaration or function invocation. That is because globalName is a global variable, it can be accessed by anything in this file.

// Step 2
// Create a function called myColor.
// Inside of myColor, create a variable called localColor and assign it your favorite color.
//   Below, console.log(localColor).You should see an error in the console.That is because localColor is a local variable, it is only known inside of the function which it was created.

// Go ahead and add a // in front of  console.log(localColor) so our code can continue. This is called commenting out code.

// Step 3
// Create a variable called myState and assign it your home state as a string unless your home state is Utah then assign it to another state.
// Create a function called stateUpdater.Inside of stateUpdater, update the value of myState to 'Utah'.
// What will the value of myState be?

//   Below, console.log(myState) to see if you were correct.

// In the console, you should see myState output to whatever state you originally assigned it.That is because we have yet to invoke stateUpdater.Go ahead and invoke stateUpdater below the console.log.This will update the value of myState.
// Below the invocation of stateUpdater, console.log(myState).You should now see that myState has the value of 'Utah'.

// We have updated a global variable, myState, inside of a function but only after the function has been invoked.

//   Step 4
// Create a function called add that takes num as a parameter.
// Inside of add, create a variable called localNum and assign it a value of 3.
// Now create an anonymous function called iAmClosure, also inside of add.Inside of iAmClosure return localNum plus the num parameter we passed in.
// Outside of iAmClosure but inside of add, return the invocation of iAmClosure.

// Before invoking add, what do you think will happen with this function? What if you try to call iAmClosure outside of add? Give this some thought before proceeding.

// Lets try to invoke iAmClosure outside of add.As you can see in the console, you get an error letting you know that iAmClosure isn't defined. Just like variables, functions can also have global or local scope.

// I am sure you have already figured out but iAmClosure is in fact a closure, or a function that has access to its enclosing parent function variables.

// Go ahead and comment out the invocation of iAmClosure outside of add.

// Now invoke add with any number as an argument.You should see whatever number you passed as an argument + 3 output to the console.

//   Summary
// The recap, variables and functions created outside of anything are part of the global scope.Variables and functions created within functions are part of the local scope.Keep in mind that there can be multiple, nested scopes.

// CODE
var globalName = "Emma";

function myName() {
  console.log("Hi, my name is " + globalName);
}
myName();


function myColor() {
  var localColor = blue;
  console.log(localColor);
}


var myState = "Colorado";

function stateUpdater() {
  myState = "Utah";
  console.log(myState);
}
stateUpdater();


function add(num) {
  var localNum = 3;
  function iAmClosure() {
    return localNum + num;
  }
  iAmClosure();
  return iAmClosure();
}
// iAmClosure();
add(2);

var globalName = "Emma";

function myName() {
  var globalName = "Jenny";
  console.log("Hi, my name is " + globalName);
}
myName(); //--> Hi, my name is Jenny 

