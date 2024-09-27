// Chapter No 12 to 13
// Question NO 01
var user = prompt("Enter a character")

if (user >= '0' && user <= '9') {
    alert("The entered character is a number.")
  }
else if (user >= 'A' && user <= 'Z') {
  alert("The entered character is an uppercase letter.")
}
else if (user >= 'a' && user <= 'z') {
  alert("The entered character is a lowercase letter.")
}
else if(user === "") {
  alert("The entered character is neither a number, uppercase letter nor lowercase letter.")
}
// Question NO 02
var Numer1 = +prompt("Enter the first number");
var Number2 = +prompt("Enter the second number");
if (Numer1 > Number2) {
  alert("The first number is larger.");
} else if (Numer1 < Number2) {
  alert("The second number is larger.");
} else {
  alert("Both numbers are equal.");
}
// Question NO 03
var num = +prompt("Enter a number");
if (num > 0) {
  alert("The number is positive.");
  } 
  else if (num < 0) {
  alert("The number is negative.");
  } 
  else {
  alert("The number is zero.");
}
// Question NO 04
var userInput = prompt("Enter a character");
var Action = false
  var vowelsWOrd = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowelsWOrd.length; i++) {
    if (userInput == vowelsWOrd[i]) {
      Action = true;
    }
}
if(Action){
    alert(userInput + " is a vowel.");
}else{
    alert(userInput + " is not a vowel.");
}
// Question NO 05
var MyPassword = "imran2472";
var userPassword = prompt("Enter your password");

if (userPassword == "") {
  alert("Please enter your password");
} 
else if (userPassword == MyPassword) {
  alert("Password is correct");
} 
else {
  alert("Invalid password");
}
// Question NO 06
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting)
}
// Question No 07
var Clock = +prompt("Enter Time in 24-hour clock format (e.g., 1900 for 7pm): ");

var defult;
if(Clock >= 0 && Clock <= 1200){
  alert("Good Morning")
}
else if(Clock >= 1200 && Clock <= 1700){
  alert("Good afternoon")
}
else if(Clock >= 1700 && Clock <= 2100){
  alert("Good Evning")
}
else if(Clock >= 2100 && Clock <= 2400){
  alert("Good Night")
}