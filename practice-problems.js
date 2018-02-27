
//02/12/18//basecamp2//parctice problems//



//#1 Create a function called "myName" that returns a string of your first name.
// CODE
function myName() {
  return "Emma";
}


//#2 Create a function called first that takes an array as a first parameter and returns the first element in that array.
// CODE
function first(array) {
  return array[0];
}


//#3 Create a function called sum that takes in two numbers as parameters and returns the sum of those two numbers.
// CODE
function sum(num1, num2) {
  return num1 + num2;
}

//#4 Create a function called evenOrOdd that takes in a number as a parameter. If the number is even return a string equal to "The number is even". 
//If the number is odd return a string equal to "The number is odd".
// CODE
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "The number is even";
  } else {
    return "The number is odd";
  }
}


//#5 Create a function called sum that takes in an array full of integers as a parameter. 
//The function should return a single number equal to the sum of all the numbers in the array.
// CODE
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total); // return --> 10
  return total;
}
sum([1, 2, 3, 4]); //invoke function// return => 10


//#6 Create a function called isAdmin that takes in an object as a parameter.
// If the object has a property called "admin" that equals true, return a string that equals 
// "Is admin". If the object has a property called "admin" that equals false, return a string that equals "Not admin".
// CODE
function isAdmin(obj) {
  if (obj.admin === true) {
    return "Is admin";
  } else if (obj.admin === false) {
    return "Not admin";
  }
}
isAdmin({ admin: true }); // invoke function // return => 'Is admin'



//#7 Create a function called countingArray that takes in an array and a number as arguments.
// The function should then: Use a loop to count up to the number passed in
// Add each number in the loop to the array as a separate property
// Return the array
// Then call the function with the provided empty array and number variable.
var emptyArray = [];
var number = 17;

// CODE
function countingArray(array, number) {
  for (var i = 1; i <= number; i++) {
    array.push(i);
  }
  return array;
}

countingArray(emptyArray, number);
//return =>[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ]

console.log(emptyArray);
//return -->[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ]



//13.1 Create a new function called updateSocialMedia that adds social media usernames to an object. 
//The function should take in an object and two strings as arguments, and then add those two strings 
//to the object as properties with the keys 'instagramID' and 'twitterID'. 
//Then call the function with the provided object and strings.
var user11553 = { username: "JStudent01" };
var instagram = "JMann22";
var twitter = "JohnM22";
// CODE
function updateSocialMedia(obj, str1, str2) {
  obj.instagramID = str1;
  obj.twitterID = str2;
  return obj;
}
updateSocialMedia(user11553, instagram, twitter);
//return --> { username: 'JStudent01',
//instagramID: 'JMann22',
//twitterID: 'JohnM22' }//
console.log(user11553);
//return --> { username: 'JStudent01',
//instagramID: 'JMann22',
//twitterID: 'JohnM22' }//



//13.2 Create a function called averageArray that takes in an array of numbers and a value 
//of either 'evens' or 'odds' and, depending on which the function is asked to evaluate, 
//returns either the average of all the even numbers in the array, or all of the odd numbers in the array. 
var arr1 = [15, 17, 22, 4, 3, 35, 11, 12, 38, 8];
// Create a function that will average all the even or odd numbers in an array.
// CODE
function averageArray(array, evensOrOdds) {
  var total = 0;
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (evensOrOdds == "evens") {
      if (array[i] % 2 === 0) {
        total += array[i];
        count++;
      }
    } else if (evensOrOdds == "odds") {
      if (array[i] % 2 !== 0) {
        total += array[i];
        count++;
      }
    }
  }
  return total / count;
}
console.log(averageArray(arr1, "evens")); // return --> 16.8
console.log(averageArray(arr1, "odds")); // return --> 16.2



//# 3.5 Stretch Problem// Open a new Swift playground. 
// Create a Person class with three properties:name property whose type is String.
// favoriteColor property whose type is an optional String.
// favoriteMovie property whose type is an optional String.
// Create a custom initializer where you set the name. Then, outside of the Person class, 
// create an instance of Person and initialize it with your name. Set either the favoriteColor 
// OR favoriteMovie property. Next, print out a description of the person's favorite things, 
// being sure to properly handle the optionals beforehand.
// Also print out the optional property you didn't set and observe the result.
// CODE
class Person {
  constructor(initialName, favoriteColor, favoriteMovie) {
    this.name = initialName;
    this.favoriteColor = favoriteColor;
    this.favoriteMovie = favoriteMovie;
  }
}
var newPerson = new Person("Emma", "blue", "minions");
favoriteMovie = newPerson.favoriteMovie;
console.log(favoriteMovie); // => war for the planet of the apes

console.log(newPerson);
// =>Person {
  //name: 'Emma',
  //favoriteColor: 'blue',
  //favoriteMovie: 'minions' }
