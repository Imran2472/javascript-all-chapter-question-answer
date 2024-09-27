// Chapter 01 Question 01
// Write a script to greet your website visitor using JS alert
// box.?
alert('Welcome to our website!');

// Chapter 01 Question 02
// Write a script to display following message on your web
// page:?
var Question_02 = document.querySelector(".question_02");
Question_02.innerHTML = "This is an a Message from the server";

// Chapter 01 Question 03
// Write a script to display following message on your web
// page: (Hint : Use line break)
var Question_3 = document.querySelector(".question_03")
Question_3.innerHTML = "Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Harum rem consequatur <br /> aliquam eveniet suscipit natus mollitia, qui placeat iure similique."

// Chapter 01 Question 04
// Write a script to display following messages in sequence:
var pera = document.querySelectorAll(".pera");
setTimeout(function() {
    pera[0].innerHTML = "Welcome to our website.<br>"
  }, 1000);
  
  setTimeout(function() {
    pera[1].innerHTML = "We are glad you are here.<br>";
  }, 2000);
  
  setTimeout(function() {
    pera[2].innerHTML = "Thank you for visiting us.<br>";
}, 3000);

setTimeout(function() {
    pera[3].innerHTML = "We hope you find what you're looking for.<br>";
    }, 4000);
    
    setTimeout(function() {
        pera[4].innerHTML = "Have a great day!";
  }, 5000);
  
  // Chapter 01 Question 05
//   Generate the following message through browser’s
// developer console:
console.log("Hello, World!");
console.log("Welcome to our website.");
console.log("How are You.");
console.log("Thank you for visiting us.");
console.log("We hope you find what you're looking for.");
console.log("Where Are You Form ?!");

// Chapter 01 Question 06
// Make use of alerts in your new/existing HTML & CSS
// project.
const alertBtn = document.getElementById('alert-btn');
alertBtn.addEventListener('click', () => {
  alert('Welcome to our website!');
  alert('Thanks For Subscribe.');
  alert('Thank you for Your Patient.');
  alert('How Are You')
  alert('Today Wheather is Good!');
});
