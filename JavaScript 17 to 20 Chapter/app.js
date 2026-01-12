let output = "";
output += "<h3>Q1 & Q2: Multidimensional Array</h3>";
let matrix = [
  [0,1,2,3],
  [1,0,1,2],
  [2,1,0,1]
];
for (let i = 0; i < matrix.length; i++) {
  output += matrix[i].join(" ") + "<br>";
}
output += "<hr>";

output += "<h3>Q3: Counting (1 to 10)</h3>";
for (let i = 1; i <= 10; i++) output += i + " ";
output += "<hr>";

output += "<h3>Q4: Table of 2 (Example)</h3>";
for (let i = 1; i <= 10; i++) {
  output += `2 x ${i} = ${2*i}<br>`;
}
output += "<hr>";

output += "<h3>Q5: Fruits Array</h3>";
let fruits = ["apple","banana","mango","orange","strawberry"];
for (let f of fruits) output += f + "<br>";
output += "<hr>";

output += "<h3>Q6: Series</h3>";
output += "Counting: ";
for (let i = 1; i <= 15; i++) output += i + ", ";

output += "<br>Reverse: ";
for (let i = 10; i >= 1; i--) output += i + ", ";

output += "<br>Even: ";
for (let i = 0; i <= 20; i += 2) output += i + ", ";

output += "<br>Odd: ";
for (let i = 1; i < 20; i += 2) output += i + ", ";

output += "<br>Series: ";
for (let i = 2; i <= 20; i += 2) output += i + "k, ";
output += "<hr>";

output += "<h3>Q7: Search Example</h3>";
let bakeryExample = ["cake","apple pie","cookie","chips","patties"];
let searchExample = "cookie";
output += searchExample + " is " +
  (bakeryExample.includes(searchExample) ? "available" : "not available");
output += "<hr>";

let nums = [24,53,78,91,12];
output += "<h3>Q8: Largest Number</h3>" + Math.max(...nums);
output += "<h3>Q9: Smallest Number</h3>" + Math.min(...nums);
output += "<hr>";

output += "<h3>Q10: Multiples of 5 (1–100)</h3>";
for (let i = 5; i <= 100; i += 5) output += i + ", ";

document.getElementById("result").innerHTML = output;

function printTable() {
  let num = prompt("Enter table number:");
  let length = prompt("Enter table length:");
  let res = "";

  for (let i = 1; i <= length; i++) {
    res += num + " x " + i + " = " + (num * i) + "<br>";
  }
  document.getElementById("table").innerHTML = res;
}

function searchItem() {
  let bakery = ["cake","apple pie","cookie","chips","patties"];
  let item = prompt("Enter item name:");

  if (bakery.includes(item.toLowerCase())) {
    alert(item + " is available in bakery");
  } else {
    alert(item + " is not available");
  }
}