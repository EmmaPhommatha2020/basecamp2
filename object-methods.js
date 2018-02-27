
//02/01/18//basecamp2//method//



//example//
function basicAddition(x, y) {
  return x + y;
}
console.log(basicAddition(2, 3));

// example//
var newObject = {};
function addValues(object, value1, value2) {
  object.value1 = value1;
  object.value2 = value2;
  return object; // if no return inside right here, then u can't call the function//
}
addValues(newObject, "Hi", "Hun");
//or//
console.log(addValues(newObject, "Hi", "Hun"));

// 10.1 Add another method to the function in the code pane. Your method should be 
//called multiplication, should take in 2 number arguments, should multiply 
//them together, and return the result.  
var basicMath = {
  addition: function (x, y) { return x + y; },
  // CODE 
  multiplication: function (num1, num2) { return num1 * num2 }
};
basicMath.addition(1, 2); //return => 3  //this is how to invoke, or use the function//
basicMath.multiplication(2, 2); //return => 4 //this is how to invoke, or use the function//

// 10.2 Create a new object variable with two methods contained within. 
//Your object should be called counting and it should include a method 
//called up and a method called down 
//for counting up and counting down:The up method should take in a single number as an argument 
//and return a number one greater than it.The down method should take in a single 
//number as an argument and return a number one lower than it.
// CODE
var counting = {
  up: function (number) {
    return number + 1;
  },
  down: function (number) {
    return number - 1;
  }
};
counting.up(3); //return => 4
counting.down(3); //return => 2


//10.3 In the code pane to the right we have an object and a function. 
//Remove the catchPhrase function that returns a string from line 5, 
//then add it into the object as a method. 
var batmansFavSayings = {
};
function catchPhrase() { return "I'm Batman." }

// CODE
var batmansFavSayings = {
  catchPhrase() { return "I'm Batman." }
};


// 10.4  On line 8, call the clive method.  
var nameSentence = "My name is ";
var nameMethods = {
  herb: function () { nameSentence += "Herbert." },
  jordan: function () { nameSentence += "Jordan." },
  clive: function () { nameSentence += "Clive." },
  brittany: function () { nameSentence += "Brittany." },
};
// CODE
nameMethods.clive(); // line 8// this is how to call the method
console.log(nameSentence); //return => My name is Clive.
nameSentence;  // return => 'My name is Clive.'

nameMethods.brittany();
console.log(nameSentence); //return => My name is Brittany.

console.log(nameMethods);
//return => { herb: [Function],
          //jordan: [Function],
          //clive: [Function],
         //brittany: [Function] }
