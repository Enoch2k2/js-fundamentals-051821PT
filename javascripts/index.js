/*
  Agenda:

  DataTypes - Truthy vs Falsy in JS
  Variable Declarations,
  Hoisting
  Functions
  Scope
  Conditionals
*/

/*
  Multi
  Line
  Comment
*/

// single line comment

/***********/
/*DATATYPES*/
/***********/
/*
  Strings
  Integers
  Booleans
  Arrays
  Objects (which looks alot like hashes!)
*/
// "strings"
// 123254324
// true
// false
// function definitions
// ["hello", 1235, true, []]
// { name: "Bob", age: 32, description: function() {
//   console.log('hello world!')
// }}
// null (which is like nil in ruby)
// undefined

// truthy vs falsy
// Anything in javascript is truthy except for:
//  false
//  null
//  0
//  undefined

// Variable Declaration Vs Assignment
// var greet = "hello world"; // unsafe to use, can be redeclared, is hoisted, can be reassigned
// const greeting = "hello world"; // safe to use, does not get hoisted, does not get redeclared, does not get reassigned
// let hi = "hello world"; // safe to use, can be reassigned, cannot be redeclared

// ruby
// def method_name(argument)
//  # logic
// end


// js we use {} to define code blocks
// we use camelCasing as a rule for naming variables / functions
// function functionName(argument) {
//  // logic
// }


// Conditionals

// Ruby
// if result == nil
//   puts "result is nil"
// end

// JS
/*
   const number = 5
   if (number >= 5) {
     console.log('number is greater than or equal to 5')
   } else if (true == false) {
     console.log('true is equal to false')
   } else {
     console.log('the first if statement will run only')
   }
*/

// Switches

/*
   const num = 5
   switch(num) {
     case 4:
       console.log('num is equal to 4');
       break;
     case 5:
       console.log('num is equal to 5');
       break;
     default:
       console.log('this is for whenever everything else fails');
       break;
   }
*/