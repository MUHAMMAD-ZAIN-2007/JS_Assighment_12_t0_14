

//Q2

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

if (num1 > num2) {
  alert(num1 + " is larger");
} else if (num2 > num1) {
  alert(num2 + " is larger");
} else {
  alert("Both numbers are equal");
}

//Q3

let num = +prompt("Enter a number:");

if (num > 0) {
  alert("Number is Positive");
} else if (num < 0) {
  alert("Number is Negative");
} else {
  alert("Number is Zero");
}

//Q4

let char = prompt("Enter a single character:");
char = char.toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  alert("true");
} else {
  alert("false");
}

//Q5

let correctPassword = "zain123";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


//Q6


let greeting;
let hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
alert(greeting);


//Q7

let time = +prompt("Enter time in 24-hour format");

if (time >= 0 && time < 12) {
  alert("Good Morning");
} else if (time >= 12 && time < 17) {
  alert("Good Afternoon");
} else if (time >= 17 && time < 21) {
  alert("Good Evening");
} else if (time >= 21 && time <= 23) {
  alert("Good Night");
} else {
  alert("Invalid Time");
}
