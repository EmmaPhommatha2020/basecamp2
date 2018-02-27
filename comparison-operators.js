
               // 01/31/18/ basecamp2/ comparison operators//
// >, <, >=, <=, ==, ===, != //

//6.5 Initialize a new variable below the bottom line that is like the one shown. 
//The truTest variable evaluates to true, but yours should evaluate to false. 
//You may use any comparison operator you like, and should be called falseTest. 
var truTest = 6 === 6;
//CODE
var falseTest = 6 === 5;

//6.6 Initialize a new variable called doubleTruTest that correctly uses the logical 
//“and” (&&) operator with two other comparison expressions on either side, and that evaluates 
// single true boolean value. Use the variable to the right as a model.               
//CODE
var doubleTrueTest = 3>2 && 3==3;

console.log(doubleTruTest); // return => true

//6.12 Create a variable called trueTest that uses the > comparison operator. 
//The comparison should result in true.
//CODE
var trueTest = 5 > 4;
console.log(trueTest); // return => true

//6.13 Create a variable called falseTest that uses the < comparison operator. 
//The comparison should result in false.
//CODE
var falseTest = 5 < 4;
console.log(falseTest); // return => false

//6.14 Create a variable called trueTest that uses the >= comparison operator. 
//The comparison should result in true.
//CODE
var trueTest = 5 >= 5;
console.log(trueTest); // return => true

//6.15 Create a variable called falseTest that uses the <= comparison operator. 
//The comparison should result in false.
//CODE
var falseTest = 5<=4;
console.log(falseTest); // return => false

//6.16 Create a variable called trueTest that uses the == comparison operator. 
//The comparison should result in true.
//CODE
var trueTest = "5" == 5;
console.log(trueTest); // return => true

//6.17 Create variable called falseTest that uses the === comparison operator. 
//The comparison should result in false.
//CODE
var falseTest = "5" === 5;
console.log(falseTest); // return => false

//6.18 Create a variable called trueTest that uses the != comparison operator. 
//The comparison should result in true.
//CODE
var trueTest = 4 != 5;
console.log(trueTest); // return => true
