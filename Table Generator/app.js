let btn = document.getElementById("btn");

btn.onclick = function () {

  let number = document.getElementById("num").value;
  let output = document.getElementById("output");

  output.innerHTML = "";

  if (number === "") {
    output.innerHTML = "<p>Please enter a number</p>";
  } else {

    for (let i = 1; i <= 10; i++) {
      output.innerHTML += "<p>" + number + " x " + i + " = " + (number * i) + "</p>";
    }

  }
};