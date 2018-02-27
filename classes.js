
//02/09/18//basecamp2//classes//mini project//


//example//
class Burger {     //class name Burger//
  constructor(layers) {   //function constructor is the entry point, every class can have access to this function
    this.layers = layers; //when the new key word is use and Burger invoke//
    this.percentLeft = 100;
  }
  eat() {     //eat(); is a function to use in class Burger,we can use (Burger.eat) 
    this.percentLeft--; //and return Burger decement --1 each time. 
    //every function that you add in class will add the prototype for you.
    //and group every funtionality Burger in one place//
  }
}
var tripleBigBoy = new Burger(3); // tripleBigBoy = new Burger that have 3 layers//
//invoke it like a function, but when we invoke it the entry point is constructor//
tripleBigBoy.eat; // to cedement the amout of the Burger lelf//


//example//
class Tree {
  constructor(height) {
    this.height = height;
    this.food = 'photosynthesis';
  }
  grow() {
    this.height++;
  }
}
var oak = new Tree(10);
oak; //return { height: 10, food: 'photosynthesis'} // and prototype; we get => grow: [function]//

oak.grow(); //we can invoke grow and it will increase the geight by +1//

oak; //return { height: 11, food: 'photosynthesis'} // and prototype; we get => grow: [function]//


//example//
class Tree {
  constructor(height) {
    this.height = height;
    this.food = 'photosynthesis';
  }
  grow() {    //grow function that increase height by +1 to the Tree//
    this.height++;
  }
}
//first Tree
var oak = new Tree(10);
console.log(oak); // return Tree { height: 10, food: 'photosynthesis' }
oak.grow();
oak; // = Tree { height: 11, food: 'photosynthesis' }
console.log(oak); //return Tree { height: 11, food: 'photosynthesis' }

//second Tree
var tawen = new Tree(5);
console.log(tawen); //return Tree { height: 5, food: 'photosynthesis' }
tawen.grow();
tawen; // = Tree { height: 6, food: 'photosynthesis' }
console.log(tawen); //return Tree { height: 6, food: 'photosynthesis' }


//#1 Create a class called Puppy.
//The class should have a constructor that accepts three parameters: happiness, energy, and behavior.
// CODE
class Puppy {
  constructor(happiness, energy, behavior) {
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }
}

var Charles = new Puppy(100, 200, 300);


//#2 Create a class called Car that creates two properties on each Car object.
// The first property should be called manufacturer and the second property should be called year.
// The class should also have a method called displayManufacturer that returns the manufacturer.
// It should also have a method called displayYear that returns the year.
// CODE
class Car {
  constructor(manufacturer, year) {
    this.manufacturer = manufacturer;
    this.year = year;
  }
  displayManufacturer() {
    return this.manufacturer;
  }
  displayYear() {
    return this.year;
  }
}

var BillysFirstCar = new Car('Tesla', 2017);
BillysFirstCar.displayManufacturer();
BillysFirstCar.displayYear();
console.log(BillysFirstCar); //return Car { manufacturer: 'Tesla', year: 2017 }


//#3 Using the provided Puppy class, create three new puppies, 
//each with whatever value you want for their happiness, energy, and behavior.
//Name each of the puppies Larry, Moe, and Curly, respectively.
class Puppy {
  constructor(happiness, energy, behavior) {
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }
}
// CODE
var Larry = new Puppy(10, 20, 30);
var Moe = new Puppy(40, 50, 60);
var Curly = new Puppy(70, 80, 90);


//#4 The class Puppy needs two methods.
// The getsTreat method should accept one parameter. It should increase happiness 
// by 20 for each treat received, then return the new happiness value.
// The takesNap method should decrease energy by 45 and increase behavior by 15.
// Make sure you make the puppy take his nap in order to change his energy and behavior levels.
class Puppy {
  constructor(happiness, energy, behavior) {
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }
  // CODE
  getsTreat(num){
    this.happiness +=20 *num; //mean this.happiness = this.happiness +20 *num;
    return this.happiness; 
  }
  takesNap(){
    this.energy -= 45; // mean this.energy = this.energy - 45; 
    this.behavior +=15; // mean this.behavior = this.behavior + 15;
  }
}
var Charles = new Puppy(75, 25, 30);
Charles.takesNap();
console.log(Charles); //return = Puppy { happiness: 75, energy: -20, behavior: 45 }//

Charles.getsTreat();
console.log(Charles); // return Puppy { happiness: NaN, energy: -20, behavior: 45 }//