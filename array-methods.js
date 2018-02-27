
//02/02//18//basecamp2//array prototypes//mini project//



//examples// array.pop();
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letters);

letters.pop();
console.log(letters);

var lastElement = letters.pop();
console.log(letters);


//examples//array.shift();
var toDos = ['study', 'eat', 'sleep', 'code', 'nap', 'shop'];
console.log(toDos);

toDos.shift();
console.log(toDos);

toDos.shift();
console.log(toDos);

var RemoveItemt = toDos.shift();
console.log(RemoveItemt);
console.log(toDos);


//examples//array.splice();
var line = ['Sue', 'Mo', 'Ted', 'Wendy', 'Theo', 'Fred', 'Stan'];
console.log(line);

console.log(line);
line.splice(0, 1);

line.splice(1, 2);
console.log(line);

line.splice(1, 0, 'Jack');  //(add in index 1, no remove, the value is "Jack")//
console.log(line);

line.splice(0, 1, "Emma");
console.log(line);

var sorryEmma = line.splice(0, 1); // remove in index 0,take out 1 value that is "Emma"//
console.log(line);


//examples//array.slice();
var line = ['Sue', 'Mo', 'Ted', 'Wendy', 'Theo', 'Fred', 'Stan']; // original array
var wholeLineCopy = line.slice();
console.log(wholeLineCopy);

var lastThreeCopy = line.slice(4);
console.log(lastThreeCopy);

var lastCopy = line.slice(6);
console.log(lastCopy);

console.log(line); // return original array without modifying the array


//example//array.push();
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
  

//examples//array.indexOf();
var fruits = ["apple", "banana", "cherry"];
var bananaPlace = fruits.indexOf("banana");
console.log(bananaPlace); //--> bananaPlace = index 1

fruits.indexOf("cherry"); //--> indexn2

var fruits = ['apple', 'banana', 'cherry', 'apple'];
var bananaPlace2 = fruits.indexOf('apple');
console.log(bananaPlace2); //--> bananaPlace2 = index 0//.indexOf only find the first a current of a match on the String, 
//so it return the 'apple' on the index 0, but not 'apple' on the index 3//


//example//array.forEach();
var myNumber = [1, 3, 5];

var addThree = myNumber.forEach((val, i, arr) => {
  arr[i] = val + 3;
  console.log(arr);
});
// Results below
[4, 3, 5] // first loop 1+3 = 4
[4, 6, 5] // second loop 3+3 = 6
[4, 6, 8] // third loop  5+3 = 8


//example//arr.map(); 
var myNumbers = [2, 3, 4];
var doubled = myNumbers.map(num => num * 2);  //.map
console.log(doubled); //-->[ 4, 6, 8 ] //return new arr//

console.log(myNumbers); //-->[ 2, 3, 4 ]//return original array without modifying the array//


//example//arr.filter(); //will return true or false//
var myPals = ["Bryan", "Landy", "Cam", "Ian", "Corey", "Taylor", "Megan"];
var longNames = myPals.filter((val, i, arr) => {
  return arr[i].length > 4;
});
console.log(longNames); //return [ 'Bryan', 'Landy', 'Corey', 'Taylor', 'Megan' ]

//or this way//both work//

var myPals = ["Bryan", "Landy", "Cam", "Ian", "Corey", "Taylor", "Megan"];
var longNames = myPals.filter(name => name.length > 4);
console.log(longNames); //return [ 'Bryan', 'Landy', 'Corey', 'Taylor', 'Megan' ] 



                               
                                //mini project//


// 1 Instructions //.forEach//
// Create an array called myNumbers. Add three of your favorite numbers to the array.
// Create a function called addThree that takes in an array as a parameter.
// Using .forEach, loop over the array and return each number + 3
// Invoke addThree using myNumbers as an argument. 

// CODE
var myNumbers = [1, 3, 5];

function addThree(arr) {
  arr.forEach(num => num + 3);  //.forEach

}
addThree(myNumbers);
myNumbers; // return => [ 1, 3, 5 ]


// 2 Instructions //.map//
// Create an array called myNumbers that has three values.
// Create a variable called doubled that will hold the result from mapping over myNumbers and doubling each number.

// CODE
var myNumbers = [2, 3, 4];
var doubled = myNumbers.map(num => num * 2);  //.map
console.log(myNumbers); //return original array
console.log(doubled);   //return new array


// 3 Instructions//.filter//
// Create a variable called longNames that will hold the result of filtering over myPals returning only names longer than 4 letters.
var myPals = ["Bryan", "Landy", "Cam", "Ian", "Corey", "Taylor", "Megan"];

// CODE
var longNames = myPals.filter(name => name.length > 4);
console.log(longNames); //return [ 'Bryan', 'Landy', 'Corey', 'Taylor', 'Megan' ]


// 4 Instructions//.forEach//
// Here we have an array called people. Some of them are our friends and some are not.
// Create an empty array called friends.
// Using .forEach, loop over people and add those that are our friend to the empty friends array.
var people = [
  { name: "Landy", friend: true },
  { name: "Corey", friend: true },
  { name: "Ted", friend: false },
  { name: "Sperry", friend: true },
  { name: "Bill", friend: false }
];
// CODE
var friends = [];
people.forEach(function (obj) {  //.forEach
  if (obj.friend === true) {
    friends.push(obj.name);
    console.log(friends); //loop through everything//skip the name that==false//console.log 3 time//
    //return--> [ 'Landy' ]
    //          [ 'Landy', 'Corey' ]
    //          [ 'Landy', 'Corey', 'Sperry' ]
  }
});
console.log(friends); //final return when it done looping//return 3name that==true//
//return--> [ 'Landy', 'Corey', 'Sperry' ]

// Or this way //
var friends = [];
people.forEach(person=>{
  if(person.friend === true){
    friends.push(person.name);
  }
});


// 5 Instructions//.map
// Take a look at the myName object. Replace "YOURFIRSTNAME" and "YOURLASTNAME" so it contains your first name and your last name.
// We also have provided a makeName function for you that will take a first name and last name and combine them.
// Create a variable called firstLast to hold the result of mapping over myName and returning your first and last name using makeName.

var myName = [{ first: "Emma", last: "Phommatha" }]; //obj mean the whole obj indise the arry//

function makeName(firstName, lastName) {
  return firstName + " " + lastName;
}
// CODE
var firstLast = myName.map(obj => {  //.map will create a new array//map through each element//
  return makeName(obj.first, obj.last); //obj mean the element//
});
console.log(firstLast);
//[ 'Emma Phommatha' ]

// Or this way //
var firstLast = myName.map(name=>{
  return makeName(name.first, name.last);
});


// 6 Instructions//.filter//
// Use .filter() to return only the future students that are old enough to attend DevMountain (18+ only, please).
// Assign the result of filtering futureStudents to a variable called oldEnough
var futureStudents = [
  { name: "Alex", age: 30 },
  { name: "Sara", age: 20 },
  { name: "Mark", age: 13 },
  { name: "Charlotte", age: 3 },
  { name: "Taylor", age: 18 }
];
var oldEnough = futureStudents.filter(student => student.age >= 18)
console.log(oldEnough);
  // [ { name: 'Alex', age: 30 },{ name: 'Sara', age: 20 },{ name: 'Taylor', age: 18 } ]
