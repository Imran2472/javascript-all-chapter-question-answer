// Question 01
var studentNames = [];

// Question 02
var studentNames = [];

// Question 03
var StringArry = ["Imran Khan", "Ijaz khan", "Pakistan", "Karachi"];

// Question 04
var NumberArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Question 05

var BolenArry = [true, false, false, true, false];

// Question 06
var MixedArry = ["imran khan", true, 1];

// Question 07

var educationQualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

// Question 08
var StudentsName = ["Imran khan", "Ijaz khan", "Ahsan"];
var StudentMarks = [480, 410, 340];

for (var i = 0; i < StudentsName.length; i++) {
  document.write(`Student name : ${StudentsName[i]} <br>`);
  document.write(`Score : ${StudentMarks[i]} <br>`);
  var percentage = (StudentMarks[i] / 500) * 100;
  document.write(`Percentage : ${percentage.toFixed(2)}% <br><br>`);
}

// Question 09

var colors = ["Red", "Green", "Blue", "Yellow"];

console.log("Initial array:");
console.log(colors);

var colorToAdd = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAdd);
console.log("Updated array after adding color to the beginning:");
console.log(colors);

// colorToAdd = prompt("Enter a color to add to the end:");
colors.push(colorToAdd);
console.log("Updated array after adding color to the end:");
console.log(colors);

// c. Add two more colors to the beginning of the array
colors.unshift("Orange", "Purple");
console.log("Updated array after adding two colors to the beginning:");
console.log(colors);

// d. Delete the first color in the array
colors.shift();
console.log("Updated array after deleting the first color:");
console.log(colors);

// e. Delete the last color in the array
colors.pop();
console.log("Updated array after deleting the last color:");
console.log(colors);

// f. Ask the user at which index he/she wants to add a color
var indexToAdd = parseInt(prompt("Enter the index at which to add a color:"));
var colorToAddAtIndex = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);

console.log("Updated array after adding color at specified index:");
console.log(colors);

// g. Ask the user at which index he/she wants to delete color(s)
var indexToDelete = parseInt(
  prompt("Enter the index at which to delete color(s):")
);
var numColorsToDelete = parseInt(
  prompt("Enter the number of colors to delete:")
);
colors.splice(indexToDelete, numColorsToDelete);
console.log("Updated array after deleting color(s) at specified index:");
console.log(colors);

// Question 10
var SortedArry = [550, 440, 460, 320, 220, 333];
var FinalSort = SortedArry.sort();
console.log(FinalSort);

// // Question 11

var CityArry = [
  "Islamabad",
  "Ahmed Nager",
  "Hyderabad",
  "Islamkot",
  "Rawalpindi",
  "Quetta",
  "Peshawar",
  "Lahore",
  "Sialkot",
  "Multan",
];
var newCity = CityArry.slice(5, 7);
console.log(newCity);

// // Question 12
var arr = ["This", "is", "my", "cat"];
var result = arr.join(" ");
console.log(result);

// // Question 13
var fifoArray = [];

fifoArray.push("Apple");
fifoArray.push("Banana");
fifoArray.push("Cherry");
fifoArray.push("Date");

console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());
console.log(fifoArray.shift());
// // Question 14
var fifoArray = [];

fifoArray.push("Apple");
fifoArray.push("Banana");
fifoArray.push("Cherry");
fifoArray.push("Date");

console.log(fifoArray.pop());
console.log(fifoArray.pop());
console.log(fifoArray.pop());
console.log(fifoArray.pop());
console.log(fifoArray);

// Question 15

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method:

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write(
    "<option value='" +
      phoneManufacturers[i] +
      "'>" +
      phoneManufacturers[i] +
      "</option>"
  );
}

document.write("</select>");
