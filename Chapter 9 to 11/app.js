// Question Number 01
var user = prompt("Enter City").toLocaleLowerCase()

if(user == "karachi"){
    alert("Welcome to The City of light")
}else{
    alert("Welcome to The City of Dark")
}

// Question Number 02
var gander = prompt("Enter Your Gender").toLocaleLowerCase();

if(gander == "male"){
    alert("Good Morning Sir")
}else{
    alert("Good Morning Madam")
}
// Question Number 03
var signal_light = prompt("Enter Color Of Traffic Light").toLocaleLowerCase();

if(signal_light == "red"){
    alert("Must Stop")
}
else if(signal_light == "yellow"){
    alert("Ready to Move")
}
else if(signal_light == "green"){
    alert("Move Now")
}

// Question Number 04
var fuel = +prompt("Enter fuel Liter number")

if(fuel == 0.25){
    alert("Please Refill the fuel in Your Car")
}else{
    alert("No Need Refill the fuel in Your Car")
}

// Question Number 05
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}


if("car" < "cat"){
alert("car is smaller than cat");
}


// Question Number 06
var sub1 = +prompt("Enter Your Marks")
var sub2 = +prompt("Enter Your Marks")
var sub3 = +prompt("Enter Your Marks")
var totol = 300;

var Obtains_marks = sub1 + sub2 + sub3;
var percantage = (Obtains_marks / totol) * 100;
console.log(percantage, Obtains_marks);
 if(percantage >= 90){
    var remarks = ""
    var grade;
    grade = "A Plus"
    remarks = "Excellent"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else if(percantage >= 80){
    var remarks = ""
    var grade;
    grade = "A one"
    remarks = "Excellent"
   document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else if(percantage >= 70){
    var remarks = ""
    var grade;
    grade = "A"
    remarks = "Good"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else if(percantage >= 60){
    var remarks = ""
    var grade;
    grade = "B"
    remarks = "You Need To improve"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }
 else{
    var remarks = ""
    var grade;
    grade = "Fail"
    remarks = "Sorry"
    document.write(`"Total Marks :" ${totol} "<br />" "Obtains Marks :" ${Obtains_marks} "<br />" "Percantages :" ${percantage} "<br />" grade : ${grade} "<br />" remarks : ${remarks}`)
 }

 // Question Number 07
var Random_Number = Math.floor(Math.random() * 10)
console.log(Random_Number);
var user = +prompt("Enter a random number")

if(user == Random_Number){
    alert("Congratulations You Won")
}else{
    alert("Sorry You Lost")
}

// Question Number 08
var num = +prompt("Enter a Number")
var reminder = num % 3
if(reminder == 0){
   alert(`${num} is divisible by 3`)
}else{
   alert(`${num} is not divisible by 3`)
}


// Question Number 09

var numeroddandeven = +prompt("Enter a number to Check The is Odd or Even")

var odd = numeroddandeven % 2
if(odd == 0){
   alert(`This Number ${numeroddandeven} is Even`)
}else{
   alert(`Thi Number ${numeroddandeven} is Odd`)
}

// Question Number 10
var whahter = prompt("Enter Temperature")
if(whahter >= 40 && whahter <= 50){
   alert(`This Temperature ${whahter} is very Hot`)
}
else if(whahter >= 30 && whahter <= 40){
   alert(`This Temperature ${whahter} is Normal`)
}
else if(whahter >= 20 && whahter <= 30){
   alert(`This Temperature ${whahter} is cool`)
}
else if(whahter >= 0 && whahter <= 20){
   alert(`This Temperature ${whahter} is very Cold`)
}
// Question Number 11
var num1 = +prompt("Enter Number To Calculate :")
var num2 = +prompt("Enter Number To Calculate :")
var operater = prompt("Enter Operator :")
var str = ""
if(operater == "/"){
    str = num1 / num2
   alert(`Result :  ${str}`)
}
else if(operater == "*"){
    str = num1 * num2
   alert(`Result :  ${str}`)
}
else if(operater == "+"){
    str = num1 + num2
   alert(`Result :  ${str}`)
}
else if(operater == "-"){
    str = num1 - num2
   alert(`Result :  ${str}`)
}