// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. 
//Assign the keys the appropriate values.

// CODE HERE
var me = {
  firstname: 'Emma',
  age: 24,
  state: 'Colorado'
};
console.log(me);
//{ firstname: 'Emma', age: 24, state: 'Colorado' }


// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'faveColor' 
//and set it to your favorite color as a string

// CODE HERE
me.faveColor = 'Blue';
console.log(me);
//{ firstname: 'Emma',age: 24,state: 'Colorado',favecolor: 'Blue' }


// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and 
//assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
}
//DON'T TOUCH THE CODE ABOVE

// CODE HERE
message["text"] = 'Where are you'

// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'.
// upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount = {
  upVote: function (number) {
    return number + 1;
  },
  downVote: function (number) {
    return number - 1;
  }
};

// #5 Create an array called 'myFriends' with four of your friends names

// CODE HERE
var myFriends = ['Jenny', 'Noud', 'Kat', 'Loun'];

// #6 Add a fifth friends name to the end of your myFriends array

// CODE HERE
myFriends.push('Pern');
console.log(myFriends); //return the final array
//[ 'Jenny', 'Noud', 'Kat', 'Loun', 'Pern' ] 

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. 
//Use the built in JavaScript method to create a copy.

//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4]
//DON'T TOUCH THE CODE ABOVE

// CODE HERE
var myArrayCopy = myArray.slice();


// #8 Below is a array, myNumbers. Create a function called 'evensOnly' 
//that returns the 'evensArray' of only even numbers

//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222]
//DON'T TOUCH THE CODE ABOVE

// CODE HERE

function evensOnly() {
  var evensArray = [];
  for (i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] % 2 === 0) {
      evensArray.push(myNumbers[i]);
    }
  }
  return evensArray;
}


// #9 Using filter(), return only your friends of the array of people below. 
//Assign it to a variable called 'trueFriends'.
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];

// CODE HERE
var trueFriends = peopleIknow.filter(obj => obj.friend === true);
console.log(trueFriends); //final return after filter//
//[ { name: 'Steve', friend: true },
//{ name: 'Bart', friend: true },
//{ name: 'Holly', friend: true } ]//


// #10 create a function called indexFinder and loop over the randomNumbers array below 
//and return a new array called 'indexes' with just their indexes. 
//Be sure to invoke indexFinder and store to the variable indexes
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];

// CODE HERE
function indexFinder() {
  var indexes = [];
  for (i = 0; i < randomNumbers.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
var indexes = indexFinder();
console.log(indexes); //return => [ 0, 1, 2, 3, 4, 5, 6, 7 ]
