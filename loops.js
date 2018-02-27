
//02/06/18//basecamp2//for loops//
// for (initial; condition; increment) { action }; //


//example for-loops//
var testArray = [];

for (i = 1; i <= 10; i++) {
  testArray.push(i);
}
console.log(testArray);
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


//example for-loops//
var attendArray = [];

function rsvp(yesOrNo, numOfGuests) {
  if (yesOrNo === true) {
    attendArray.push(true);
    console.log(attendArray);
    //[ true ] 

    for (i = 1; i <= numOfGuests; i++) {
      attendArray.push(true);
      console.log(attendArray);
      // [ true, true ]
      // [ true, true, true ]
      // [ true, true, true, true ]
      // [ true, true, true, true, true ]
      // [ true, true, true, true, true, true ] //loop thr and console.log 5 time//
    }
  }
}
rsvp(true, 5);//or rsvp(false,0);will return an empty array []; // and this is how to call, use, invoke the function//
console.log(attendArray);
//[ true, true, true, true, true, true ]


//12.1 Create a new function called loveTheH that takes in a string as an argument. In the function, 
//create a for loop that runs 10 times, and each time concatenates an 'H' on the end of the string passed in. 
//When the for loop is done running (but still inside the function), return the resulting string.
// CODE
function loveTheH(string) {
  for (i = 1; i <= 10; i++) { //i=1 mean start at 1// i<=10 mean i stop at 10// i++ mean increment 1 each time//
    string += 'H';
  }
  return string;
}
loveTheH('hello '); // return => 'hello HHHHHHHHHH'
loveTheH('hi '); // return => 'hi HHHHHHHHHH'


//12.2  Create a function called  countingByTwo that takes in a number as an argument, and then uses that number 
//to dictate how many times the computer will count by two. Your function should run a for loop and should loop as many times 
//as the number argument, and should do the following:
//- For each loop, add two to the startingNum variable.
//- For each loop, log the value of startingNum to the developer console.
//- After all the loops (but still in the function), return startingNum
var startingNum = 0;
// Create a function that uses the above variable to count by twos.
// CODE
function countingByTwo(number) {
  for (i = 1; i <= number; i++) {
    startingNum += 2;
    console.log(startingNum); //startingNum+2; 0+2 = 2; 2+2= 4; 4+2= 6; 6+2= 8//return => 2 4 6 8//
  }
  return startingNum; // return => 8
}
countingByTwo(4);
console.log(startingNum); // return => 8






//02/06/18//basecamp2//iterating-loops that iterating throughan array//


//example//hard-coding//array//
var nameArray = ["Emma ", "Amm", " Phommatha"];
var text = "";
for (i = 0; i < nameArray.length; i++) {    //.length
  text += nameArray[i];      // concatenating the nameArray to text//
};
console.log(text);    //Emma Amm Phommatha
console.log(nameArray);    //[ 'Emma', 'Amm', 'Phommatha' ]


//example// not hard-coding// array//
function changeEverthing(arr, value) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
  return arr;    // after the for loops
}
var testArray = [1, 3, 5, 7];
console.log(testArray);
// [ 1, 3, 5, 7 ]

console.log(changeEverthing(testArray, 'This is a test.')); //return 1,3,5,7 arr = 'This is a test.' all 4 indexs//
// [ 'This is a test.',
//  'This is a test.',
//  'This is a test.',
//  'This is a test.' ]


//example// not hard-coding//object//
function changeEverthing(obj, value) {
  for (i in obj) {
    obj[i] = value;
  }
  return obj;
}
var myobj = {
  thing1: 1,
  thing2: 2,
  thing3: 3
};
console.log(changeEverthing(myobj, 33)); //return all 3obj on myobj that have value of 33//
//{ thing1: 33, thing2: 33, thing3: 33 }




//02/07/18//basecamp2//for..in loops//iterating through an object//


//example//
var personalInfo = {
  twitter: "twitterHandle",
  email: "email@email.com",
  firstName: "Emma",
  lastName: "Phommatha"
};
for (i in personalInfo) {
  personalInfo[i] = "Test";
  console.log(personalInfo);//#1 //inside the for in loops//looping through all of the 4property and return// 
  //   { twitter: 'Test',
  //   email: 'email@email.com',
  //   firstName: 'Emma',
  //   lastName: 'Phommatha' }
  // { twitter: 'Test',
  //   email: 'Test',
  //   firstName: 'Emma',
  //   lastName: 'Phommatha' }
  // { twitter: 'Test',
  //   email: 'Test',
  //   firstName: 'Test',
  //   lastName: 'Phommatha' }
  // { twitter: 'Test',
  //   email: 'Test',
  //   firstName: 'Test',
  //   lastName: 'Test' }
  console.log(personalInfo[i]);//#2 //inside for in loop// looping 4times and asign the value to Test for each key// not done looping// return 4values//
  //Test
  //Test
  //Test
  //Test
};
console.log(personalInfo);//#1 //outside of the for in loops and outside of the function// return the final answer//
// { twitter: 'Test',
// email: 'Test',
// firstName: 'Test',
// lastName: 'Test' }
console.log(personalInfo[i]);//#2 //console.log with[i]//return the final answer//
// Test   




//02/07/18//basecamp2// for loops practice//


//12.3  Create a new function called totalOfNumbers that will take in an array of numbers 
//and add all of them to the total variable, and then return total. 
var total = 0;
// Create a function that adds numbers in an array to the total.
function totalOfNumbers(arr) {
  for (i = 0; i < arr.length; i++) {
    total += arr[i];   // return total and add the new number// 1 /3 /6 /10//
  }
  return total; //return => 10
}
totalOfNumbers([1, 2, 3, 4]); //invoke the function

//this is how to use it//
var total = 0;
// Create a function that adds numbers in an array to the total.
function totalOfNumbers(arr) {
  for (i = 0; i < arr.length; i++) {
    total += arr[i]; // return total and total is=0; now 1+0= 1; 2+1= 3 
    //and add the new number untill is done looping through the whole array
    //looping through 5times from the invoke[1,2,3,4,5] //
    console.log(total);
    //1
    //3
    //6
    //10
    //15
  }
  console.log(total);
  //15
  return total; //return the final loop//the final total//
  //15
}
totalOfNumbers([1, 2, 3, 4, 5]); //invoke the function totalOfNumbers and passed in the array number//



//12.4 Create a new function called lookingForDave that will iterate through an array of names, 
//and evaluate whether or not one of them is "Dave". Use a for loop to iterate through the array, 
//and an if/then statement to check to see if the current item in the array is "Dave". 
//If the loop finds Dave, return the string "I found him."
// Create a function that checks to see if "Dave" is in an array.
function lookingForDave(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == "Dave") {
      return "I found him.";
    }
  }
}

//this is how to use it//
function lookingForDave(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == "Dave") {
      return "I found him.";
    } else {
      return "Nope";
    }
  }
}
lookingForDave(["Dave"]); // return "I found him." base on the if statement if "Dave" in the array like this//
// if not return "Nope" base on the else statement


//12.5 You are a spy, and it is time to clear dangerous information about you from government records. 
//Create a function on line 7 called IwasNeverHere that takes in an object, iterates through the object properties, 
//and changes all the values to "redacted". Then call the function and pass in the provide object.
var infoAboutJamesBond = {
  firstName: "James",
  lastName: "Bond",
  hobby: "Murder"
};
// Create a function that redacts information from an object, then call it.
// CODE
function IwasNeverHere(object) {
  for (i in object) {     // i mean eact key in the object//
    object[i] = 'redacted';  //object[i] mean each key in the whole object = 'redacted'//
  }
}
IwasNeverHere(infoAboutJamesBond); // invoke the function and passed in the var object infoAboutJamesBond//
console.log(infoAboutJamesBond); //return the object with the same key but all = new value 'redacted'//
//{ firstName: 'redacted',
//lastName: 'redacted',
//hobby: 'redacted' }

