
                      //01/31/18/basecamp2//truthy & falsy//

                      

// In JavaScript, variables have an inherited boolean (true or false) value. These values are known and truthy and falsy. Lets take a look and see what values are always falsy.

 false
 0              //as a number. All other numbers, including negatives, are truthy
 ' ' or " "     //empty strings
 null           //any variable declared with the value of null
 undefined      // a blank variable
 NaN            //not a number

// Everything other than those variable values is considered truthy.  Some other values that you may think are falsy but are actually truthy include:

'0'         //as a string
[]         //an empty array
{}         //an empty object
'false'   //as a string
// To make this more clear, lets take a look at this function that will evaluate whether a value is either truthy or falsy.

function truthyOrFalsy(val){
  if(val){
    //if the value is truthy, console.log('The value is truthy')
    console.log('The value is truthy')
  } else{
    //if the value is falsy, console.log('The value is falsy')
    console.log('The value is falsy')
  }
}
// Now lets pass some data into our newly created truthyOrFalsy function.

truthyOrFalsy('');
// logs 'The value is falsy';
truthyOrFalsy('DevMountain');
// logs 'The value is truthy';
truthyOrFalsy([]);
// logs 'The value is truthy';
truthyOrFalsy(0);
// logs 'The value is falsy';
truthyOrFalsy(-1);
// logs 'The value is truthy';
truthyOrFalsy(null);
// logs 'The value is falsy';
truthyOrFalsy(NaN);
// logs 'The value is falsy';
// As you can see, this simple function will allow us to test any values we may have being truthy or falsy. Now you can use these values to your advantage when evaluating data.

//1.//
function truthyOrFalsy(val){
  if(val){
    congsole.log('The value is truthy')
  } else {
    console.log('The value is falsy')
  }
}
// //What will the result of the function call be?
// //Assign the variables below the correct truthy or falsy value as a string
truthyOrFalsy(3)
var answer1 = "truthy"// your answer here

truthyOrFalsy(0)
var answer2 = "falsy"// your answer here

truthyOrFalsy(-1)
var answer3 = "truthy"// your answer here

 truthyOrFalsy('name')
var answer4 = "truthy"// your answer here

truthyOrFalsy('')
 var answer5 ="falsy"// your answer here

 truthyOrFalsy(false)
var answer6 = "falsy"// your answer here

 truthyOrFalsy('false')
var answer7 = "truthy"// your answer here

truthyOrFalsy([])
var answer8 = "truthy"// your answer here

truthyOrFalsy(null)
var answer9 = "falsy"// your answer here

 truthyOrFalsy({})
var answer10 = "truthy"// your answer here

truthyOrFalsy(NaN)
var answer11 = "falsy"// your answer here

// var undefinedVariable;//Don't worry about this right now
// truthyOrFalsy(undefinedVariable)
var answer11 = "truthy"// your answer here

//9.1  Create a new function called increment that adds one to the value of the counting variable. Then call the function. 

var counting = 4;
function increment() {
  counting++;
}
increment();

//9.2 Create a function called subtraction that takes in two numbers and subtracts the second one from the first and logs the result to the console.Then call the function and pass in the numbers 8 and 4 as arguments.

function subtraction(num1, num2) {
  console.log(num1 - num2);
}
subtraction(8, 4);

//9.3 Create a new function that uses a comparison operator to test whether or not two arguments are the same, and name it sameNotSame. Your function should send the result of the comparison to the developer console. Then call the function and pass in two strings that are the same.

function sameNotSame(arg1, arg2) {
  console.log(arg1 === arg2);
}
sameNotSame("Hi", "Hi");