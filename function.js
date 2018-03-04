
//02/11/18//basecamp2//Function//practice problems//

/* the way to tell computer to perform action. 
  function have: name, inputs, and actions.
  defining function: function name (inputs){actions}.
  function can be anything such ass: add or remove items from the array, ect.
  function expression: var sayName = function(){};
  function decaration: function sayName(){};
  function a way to weite repeatable code.
  a parameter is a variable.
*/


//9.1 Create a new function called increment that adds one to the value of the counting 
//variable. Then call the function.
var counting = 4;
// CODE
function increment() {
  counting++;
}
increment();
console.log(counting); // return => 5


//9.2 Create a function called subtraction that takes in two numbers and subtracts 
//the second one from the first and logs the result to the console.
//Then call the function and pass in the numbers 8 and 4 as arguments.
// CODE
function subtraction(num1,num2){
  console.log (num1 - num2);
}
subtraction(8,4);


//9.3 Create a new function that uses a comparison operator to test whether or not two 
//arguments are the same, and name it sameNotSame. Your function should send the 
//result of the comparison to the developer console. 
//Then call the function and pass in two strings that are the same.
// CODE
function sameNotSame(arguments1,arguments2){
  if(arguments1 === arguments2){
    console.log('true');
  }
 }
 sameNotSame("Hi","Hi");//return => true


