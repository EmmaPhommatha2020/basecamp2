                           
                           //02/01/18//basecamp2//object//

                                         
// 7.1 In the coding panel, initialize a new JavaScript object called 
// favorites and then add the following string properties:
// 1.food - should contain a string of your favorite food.
// 2.hobby - should contain a string of your favorite hobby.
// 3.movie - should contain a string of your favorite movie.                    

// CODE
var favorites = {
  food : "pizza",
  hobby : "soccer",
  movie : "minions",
};
 

// 7.2  Add a new property to the object in the coding pane called batmanIsCool. 
// You should be able to do this without modifying the code above line 6. 
// This property is also a boolean and you should write whether or not you think 
// Batman is cool using the boolean values true or false. 
var myThoughtsAboutSuperheroes = {
  spidermanIsCool: true,
  ironManNeedsMoney: false,
  aquamanIsCoolerThanHeLooks: false
};
// CODE
myThoughtsAboutSuperheroes.batmanIsCool = true;


// 7.3 Create a new variable by concatenating the first and second properties from the words object. 
// Call the variable trueStatement. 

var words = {
  first:'Javascript Objects',
  second:' get easier to use with practice.',
};
// CODE
var trueStatement = words.first + words.second;


// 7.4 Initialize a new object variable on line 6. Call your object variable treasureHunt and give it 3 properties.
// Each of the properties should have a key:value pair with the name and location of an item. 
//The item keys you should use are:
// coin
// locket
// key
// To the left are some string variables containing the location of items. 
// Use these variables to define your object property values, so that you don't have to 
//retype the location of the items. When you are done, you should have a new object with 3 properties. 
//Each property should have the name above, and the value should be the string contained in the corresponding variable to the left. 
var coinLocation = "Hidden in the sofa.";
var locketLocation = "Buried in the garden.";
var keyLocation = "Rick swallowed it. Available in 24 hours.";

// CODE
var treasureHunt = {
  coin:coinLocation,
  locket:locketLocation,
  key:keyLocation
};


                           
                           