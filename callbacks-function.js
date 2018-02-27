
//02/08/18// basecamp2//callbacks functions// mini project//



// example//
function repeathMe(numTimes, callback) {
  for (var i = 0; i < numTimes; i++) {
    callback();
  }
}
function sayHello() {
  console.log('hello!');
}
repeathMe(5, sayHello); //return the numTimes = 5 times; and the callbcak sayHello = 'hello!' to each numTimes//
// hello!
// hello!
// hello!
// hello!
// hello!

//example// buil map ourself//
function map(array, callback) {
  var arrayCopy = [];
  for (var i = 0; i < array.length; i++) {
    arrayCopy[i] = callback(array[i]); //arrayCopy invoke callback
  }
  return arrayCopy;
  //return => [2,3]
}
var twoThree = map([1, 2], function (num) { //invoke the function map//
  return num + 1;
});


//example//array.map is use callback function to help you do a small pice of the larger whole//
var array = [1, 2, 3];

var oneUp = array.map(function (num) { //.map go throuth the array on variable name array and push
  //each value on the index[0,1,2] = values of[1,2,3]in the array to the parameter (num) in the function and add +1 to it each time
  //and 1+1=2, 2+1=3, 3+1=4; [2,3,4] are the new value of index [0,1,2] and push in the new variable name oneUp//  
  return num + 1;
});
oneUp;
//return => [2,3,4]

//or i can do this too//
var array = [1, 2, 3];
var oneUp = [];
array.map(function (num) {
  oneUp.push(num + 1);
});
onUp;
//return => [2,3,4]

//or use arrow function//
var array = [1, 2, 3];
var onUp = [];
array.map((num) => {
  onUp.push(num + 1);
});
onUp;
//return => [2,3,4]



// Mini project //


//#1 Instructions
// Create a function called outerFn, that takes in a callback as a parameter, and then returns that callback invoked.
// To see it working, invoke outerFn at the bottom, passing in the InnerFn as the callback. 
// You should now see "The innerFn is a callback!" in the console.
// CODE
var outerFn = callback => {
  return callback();
};

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
var innerFn = () => {
  return "The innerFn is a callback!";
};
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

// Invoke function here
outerFn(innerFn);
//return => 'The innerFn is a callback!'


//#2 Instructions
// Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.
// The fullName function should return the callback, passing in firstName and lastName as parameters.
// To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.
// CODE
var fullName = (firstName, lastName, callback) => {
  return callback(firstName, lastName);
};

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
var welcomeMessage = (first, last) => {
  return `Welcome to DevMountain, ${first} ${last}!`;
};
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

// Invoke fullName below
fullName("Emma", "Phommatha", welcomeMessage);
//return => 'Welcome to DevMountain, Emma Phommatha!'


//#3 Instructions
// Create a function called canDrink that will take in three parameters.
// The first parameter will be an number representing an age. The second and third parameters will be callbacks. 
// The functions drinkSoda and drinkAlcohol are examples of callbacks that could be passed into your function.
// If the age is 21 or greater, return drinkAlcohol
// If the age is below 21, return drinkSoda
// CODE
var canDrink = (age, callback1, callback2) => {
  if (age >= 21) {
    return callback1();
  } else {
    return callback2();
  }
};
// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
var drinkAlcohol = () => {
  return "Drink responsibly!";
};

var drinkSoda = () => {
  return "Come back when you are legally allowed a drink!";
};
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //


//#4 Instructions
// Write two functions, one called add and one called multiply, that each takes in 
// two numbers and returns the appropriate new value.
// Write a function called math that takes in two numbers, and a function 'operator' as parameters.
// This function should return a callback invoked with the appropriate arguments.
// CODE
var add = (num1, num2) => num1 + num2;

var multiply = (num1, num2) => num1 * num2;

var math = (num1, num2, callback) => {
  return callback(num1, num2);
};
math(1, 2, add); //return => 3
math(1, 2, multiply); //return => 2


//#5 Instructions
// For this problem, we will be re-creating the functionality of the .filter function.
// Begin by creating a checkAge function.
// It needs to take in an array, loop through it, and return a new array 
// containing all the numbers greater than 18.
// CODE
var checkAge = (arr) => {
  var newAges = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 18) {
      newAges.push(arr[i]);
    }
  }
  console.log(newAges); // return [ 32, 33, 40, 19 ]  
  return newAges; //=> [ 32, 33, 40, 19 ]
};

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //

var ages = [3, 32, 33, 16, 8, 40, 12, 19];

var filter = (arr, cb) => { //arr = ages; cb = checkAge//
  return cb(arr);
};

filter(ages, checkAge);     // invoke function filter
//return => [ 32, 33, 40, 19 ]
