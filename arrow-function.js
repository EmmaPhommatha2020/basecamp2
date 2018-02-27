
// 02/08/18// basecamp2// arrow function =>//mini project//
//


//#1 Instructions 
// Create a one line ES6 arrow function called isGreaterThanTwenty that will take 
// in a parameter and return true if the parameter is greater than 20. The function s
// hould return false otherwise.
// You should not use the ES5 function declaration syntax in your final solution.
// Your function should not be longer than one line. 
// CODE
var isGreaterThanTwenty = (num) => num > 20;


//#2 Instructions 
// Create a one line ES6 arrow function called seven that will return the number 7.  
// You should not use the ES5 function declaration syntax in your final solution.
// Your function should not be longer than one line.
// CODE
var seven = () => 7;


//#3 Instructions  
// Re-write the ES5 functions provided as ES6 arrow functions.
// Name your functions the same as the ES5 versions provided.
// You should not use the ES5 function declaration syntax in your final solution.
// Be sure to call the functions the same name as in the ES5 syntax functions.
// Function 1
function add(num1, num2){
  return num1 + num2;
}
// CODE
var add = (num1,num2) => num1+num2;

// Function 2
function subtract(num1, num2){
  return num1 - num2;
}
// CODE
var subtract = (num1,num2) => num1-num2;

// Function 3
function double(num){
  return num * 2
}
// CODE
var double = num => num *2;


//#4 Instructions 
// Create an ES6 arrow function called multiply that will take in two parameters 
// and return the product of the two parameters.
// ou should not use the ES5 function declaration syntax in your final solution.
// CODE
var multiply = (num1,num2) => num1*num2;


//#5 Instructions 
//Create an ES6 multi-line arrow function called isGreaterThanTwenty that will take in 
//a number parameters and return true if the parameter is greater than twenty. 
//The function should return false otherwise. 
// CODE 
var isGreaterThanTwenty = (num) => {
  return num > 20;
};
// Or this way is the ES5 function declaration syntax //
var isGreaterThanTwenty = (number)=> {
  if(number>20){
    return true;
  }else{
    return false;
  }
};


//#6  Instructions 
//Create an ES6 arrow function called add that will take in two parameters, both numbers. 
//The function will need to add the two parameters passed in. 
// CODE
var add = (num1, num2) => num1 + num2;


//#7 Instructions
// Use the built in filter method to filter over the jobs array of objects and return 
// the object of the person with a job as a programmer. Make sure to use the arrow function 
// in conjunction with the filter method.
// Should not use the ES5 function declaration syntax in your final solution.
// Should not use a for loop.
// Should not have the function keyword anywhere in the solution.
var jobs = [{receptionist: "James"}, 
{programmer: "Steve"},
{designer: "Alicia"}];

// CODE
var solution = jobs.filter((obj)=> obj.programmer);


// #8 Instructions 
// Write a multi-line arrow function called gemInfo that takes in three parameters, 
// a gem type, gem size, and  a gem weight. Have the gemInfo function return an abject 
// with the values of those parameters set to these three keys, gemType, gemSize, gemWeight.
// Should use arrow function
// Should be a multi-line function
// CODE
var gemInfo = (gemType,gemSize,gemWeight) =>{
  return {
  gemType,
  gemSize,
  gemWeight
  };
};


//#9 Instructions 
// Inside the evens function use the built in filter method to filter over the array called 
// numbers and return a new array with only the even numbers. 
// Make sure to use the arrow function combined with the filter method.
// The numbers variable will be changed during tests.
// Should use arrow function
// Should use filter method
var numbers = "TBD";

// CODE
var evens = () => {
  return numbers.filter(num =>num %2 === 0);
};


//#10 Instructions  
// Inside the startWithLetterA function use the built in filter method to filter over the array 
// called strings and return a new array with only the strings that start with a letter "a".
// Make sure to use the arrow function combined with the filter method.  
// The strings variable will be changed during tests.
// Should use arrow function
// Should use filter method
var strings = "TBD";

// CODE
var startWithLetterA = () => {
  return strings.filter(str => str.charAt(0)==='a');
};


//#11 Instructions 
// Inside the formalGreeting function use the built in .map method to map over the array 
// called names and return a new array with "Hello, " appended to the beginning of each name.
// Make sure to use the arrow function combined with the filter method.  
// The names variable will be changed during tests.
// Should use arrow function
// Should use map method
var names = "TBD";

// CODE
var formalGreeting = () => {
  return names.map(name => "Hello, "+name);
};


//#12 Instructions 
// Inside the productOfArray function use the built in reduce method to loop over the array 
// called numbers and return the product of all the numbers in the array. 
// Make sure to use the arrow function combined with the reduce method.  
// The numbers variable will be changed during tests.
// Should use arrow function
// Should use reduce method
var numbers = "TBD";

// CODE
var productOfArray = () => {
  return numbers.reduce((accumulator,num)=>accumulator*num);
};