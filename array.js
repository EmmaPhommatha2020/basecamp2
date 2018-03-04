
//02/02/18//basecamp2//array//

/* Array [], lists of any data types, and have a number index. */



// 8.1  Create a new array variable called numbers with the numbers 1 through 5 in it. 
// CODE
var numbers = [1, 2, 3, 4, 5];


// 8.2  Add the string hammer to the index without editing the code above line 3. 
//Make sure you add the string to the correct index for it to be at the end of the array. 
// CODE
var tools = ["drill", "saw", "screwdriver", "pliers"]
tools[4] = "hammer";

console.log(tools); // return => [ 'drill', 'saw', 'screwdriver', 'pliers', 'hammer' ]


// 8.3  We need to pull a specific string from the petNames array of romantic nicknames. 
//Create a variable called tonightsPickupLine and make the contents equal to the index in the array that says JuJuBee. 
var petNames = ['Bubbly Boo', 'Giggle Cheeks', 'Snuggluffugus', 'JuJuBee', 'Tubba Wubba'];
// CODE
var tonightsPickupLine = petNames[3];
console.log(tonightsPickupLine); // return => JuJuBee
tonightsPickupLine; // return => 'JuJuBee'


// 8.4  We need to transfer the data from the javascript object to the left into an array. 
//Initialize a new array called userDataArray and add all of the data from the object into the array 
//by calling it from the object using the number keys that have been added to the object. 
//When you are done, you should have the same data from the object that has already been written, but in an array, 
//without having to retype each of the variables separately.  
var userData = {
  1: true,
  2: true,
  3: "00QRA10",
  4: "slimer42",
  5: "FFASN9111871-USN16"
};
// CODE
var userDataArray = [userData[1], userData[2], userData[3], userData[4], userData[5]];

console.log(userData);
/* return => { 1: true,
  2: true,
  3: '00QRA10',
  4: 'slimer42',
  5: 'FFASN9111871-USN16' }
*/

console.log(userDataArray);
/* return => [ true, true, '00QRA10', 'slimer42', 'FFASN9111871-USN16' ]*/