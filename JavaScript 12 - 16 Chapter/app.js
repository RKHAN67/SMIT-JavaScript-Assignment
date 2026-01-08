let age = parseInt(prompt("Chapter 12: Enter your age:"));
let ageResult = "";
if (age >= 18) ageResult = "You are an adult!";
else if (age >= 13) ageResult = "You are a teenager!";
else ageResult = "You are a child!";
document.getElementById("ageResult").innerText = ageResult;

let num = parseInt(prompt("Chapter 13: Enter a number:"));
let numResult = "";
if(num > 0 && num % 2 === 0) numResult = num + " is positive even.";
else if(num > 0 && num % 2 !== 0) numResult = num + " is positive odd.";
else numResult = "Number is zero or negative.";
document.getElementById("numberResult").innerText = numResult;

let pwd = prompt("Chapter 14: Enter a password:");
let pwdResult = "";
if(pwd.length >= 8){
  if(pwd.includes("123")) pwdResult = "Weak password!";
  else pwdResult = "Strong password!";
} else pwdResult = "Too short, minimum 8 characters!";
document.getElementById("passwordResult").innerText = pwdResult;

const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
fruits.splice(1,1);
document.getElementById("arrayResult").innerText = "Fruits: " + fruits.join(", ");

let arr = [1,2,3];
arr.push(4);
arr.pop();
document.getElementById("pushPopResult").innerText = "Resulting Array: " + arr;
