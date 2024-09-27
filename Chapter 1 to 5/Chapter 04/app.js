
// Chapter 04 Question 01
// Declare 3 variables in one statement
let FName = "Muhammad Imran", LastName = "Khan", occuoccupation = "Web Developer";
console.log(FName, LastName, occuoccupation)

// Chapter 04 Question 02
// Declare 5 legal & 5 illegal variable names.
// Legal Variable Name 
var firstName
var age
var occupation
var user123
var _privateVar
var $Imran
// ilLegal Variable Name 
// var 123abc 
// (starts with a number)
// var @username
// (contains a special character)
// var class 
// (reserved keyword)
// var true 
// (reserved keyword)
// var !important
// (contains a special character)


// Chapter 04 Question 03
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________
var info = document.querySelector(".info")
info.innerHTML =  `
                <h1>Rules for naming JS variables</h1>
                <p>Variable names can only contain letters, digits, underscores, and dollar signs.</p>
                <p>For example: $my_1stVariable</p>
                <p>Variables must begin with a letter, underscore, or dollar sign.</p>
                <p>For example: $name, _name or name</p>
                <p>Variable names are case sensitive.</p>
                <p>Variable names should not be JS keywords.</p>
`