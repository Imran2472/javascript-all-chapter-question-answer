// Chapter 03 Question 01
// Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 20
alert("I am" + " " + age + " " + "Years Old")

// Chapter 03 Question 02
// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
let visitCount = localStorage.getItem("visitCount");
if (visitCount === null) {
visitCount = 1;
} else {
visitCount++
}
localStorage.setItem("visitCount", visitCount);
var VisitCount = document.querySelector(".visit-message");
VisitCount.textContent = "You have visited this site " + visitCount + " times";

// Chapter 03 Question 03
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var Brith_Day = "2003"
var NewAge = new Date().getFullYear()
var age = NewAge - Brith_Day;
var brith_day_message = document.querySelector(".brith_day_message")
brith_day_message.innerHTML = "I was born in " + Brith_Day + " and I am " + age + " years old.";

// Chapter 03 Question 04
// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var UserName = prompt("Enter your name")
var ProductTitle = prompt("Enter your product title")
var StoreName = prompt("Enter your store name")
var Quantity = prompt("Enter your quantity number to order  the products")
var order_message = document.querySelector(".order_message")
console.log(UserName)
order_message.innerHTML = UserName + " "  + "Ordered" + " " + Quantity + " " + ProductTitle + " " + "From" + " " + StoreName;

