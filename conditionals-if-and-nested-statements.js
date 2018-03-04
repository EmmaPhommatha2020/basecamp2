
//01/31/18/ basecamp2//conditionals, if/else if/else statement// and nested conditionals//

/* use to define logic and evaluation when solve problem */


//11.1  Complete the function to the right by adding an if/then statement inside that returns true as long as the number 
//that is passed in is not 2, and returns false if the number passed in is 2. 
// CODE
function noTwosAllowed(number) {
  if (number != 2) {
    return true;
  } else {
    return false;
  }
}
noTwosAllowed(3); // invoke the function// return => true   
noTwosAllowed(2); // invoke the function// return => false


//11.2  Create a new function called greaterThanFive that takes in a number as an argument. 
//The function should then evaluate if the number passed in is greater than 5, and return true if it is, and false if it is not. 
// CODE
function greaterThanFive(number) {
  if (number > 5) {
    return true;
  } else {
    return false;
  }
}
greaterThanFive(6); //invoke the function// return => true
greaterThanFive(5); //invoke the function// return => false


//11.3  Create a function called hasGlasses that takes in a boolean argument. Then, evaluate whether the argument is true or false.
//If the argument is true, return the string "Nice glasses."
//If the argument is false, return the string "You should maybe look into getting some glasses..."
// CODE
function hasGlasses(boolean) {
  if (boolean === true) {
    return "Nice glasses.";
  } else {
    return "You should maybe look into getting some glasses...";
  }
}
hasGlasses(true); // return => 'Nice glasses.'
hasGlasses(false); // return => => 'You should maybe look into getting some glasses...'


//nested// 11.4  Create a function called hasGlasses that takes in two boolean arguments, 
//the first for if a person has glasses, and the second for if they look good anyway. 
//Then, add a nested evaluation to your argument to check which of the following sentences should be returned:  
//If the first argument is true, return the string "Nice glasses."
//If the first argument is false, and the second argument is false, return the string "You should maybe look into getting some glasses..."
//If the first argument is false, and the second argument is true, return the string "Congrats on being one of the few people who look good without glasses!"
// CODE
function hasGlasses(boolean1, boolean2) {
  if (boolean1 === true) {
    return "Nice glasses.";
  } else if (boolean1 === false) {
    if (boolean2 === false) {
      return "You should maybe look into getting some glasses...";
    } else if (boolean2 === true) {
      return "Congrats on being one of the few people who look good without glasses!";
    }
  }
}
hasGlasses(true, false); //return => 'Nice glasses.'
hasGlasses(false, false); //return => 'You should maybe look into getting some glasses...'
hasGlasses(false, true); //return => 'Congrats on being one of the few people who look good without glasses!'


//11.5 Create an if/else if statement for the given age variable. If the age is greater than or equal to 18, set the value of canVote to true. 
//If the age is less than 18, set the value of canVote to false.
var age = 18;
var canVote;
//CODE
if (age >= 18) {
  canVote = true;
}
else if (age <= 18) {
  canVote = false;
}


//11.6 Create an if/else if/else statement for the given sum variable. If the sum is even, set the isEven variable to true. 
//If the sum is odd, set the isEven variable to false. If the sum is not either of those things, set the isEven variable 
//to a string that equals "not a number".When we test your code, we will set the value of sum.
var sum;
var isEven;
//CODE
if (sum % 2 === 0) {
  isEven = true;
} else if (sum % 2 > 0) {
  isEven = false;
} else {
  isEven = "not a number";
}


//nested// 11.7 Using a nested if/else statement structure. Check to see if hasExperience is equal true. 
//If it is true then use another, nested, if statement to check to see if amountOfExperience is greater than 5. 
//If both statements are true, set the gotJob variable to true. 
//If hasExperience is equal to false or amountOfExperience is less than or equal to 5, set the gotJob variable to false.
//We will set the value of hasExperience and amountOfExperience when we test your code.
var hasExperience;
var amountOfExperience;
var gotJob;
// CODE
if (hasExperience === true) {
  if (amountOfExperience > 5) {
    gotJob = true;
  } else {
    gotJob = false;
  }
}
if (hasExperience === false || amountOfExperience <= 5) {
  gotJob = false;
}

//nested// 11.7 Using a nested if/else statement structure. Check to see if hasExperience is equal to true. 
//If it is true then use another, nested, if statement to check to see if amountOfExperience is greater than 5. 
//If both statements are true, return true. 
//If hasExperience is equal to false or amountOfExperience is less than or equal to 5, return false.
//We will set the value of hasExperience and amountOfExperience when we test your code.
// Do not edit code below
var hasExperience;
var amountOfExperience;
// Do not edit code above
function employed(){
if(hasExperience){
  if(amountOfExperience >5){
    return true;
  }
}
if(hasExperience === false || amountOfExperience < 5){
  return false;
}
}