    function chapter6() {
      var name = prompt("Enter your name:");
      var msg = "Hello, " + name + "!";
      document.getElementById("output6").innerText = msg;
    }

    function chapter7() {
      var arr = [10,20,30,40,50];
      var output = "First: " + arr[0] + ", Last: " + arr[arr.length-1];
      document.getElementById("output7").innerText = output;
    }

    function chapter8() {
      var output = "";
      for(var i=1;i<=5;i++){
        output += i + " ";
      }
      document.getElementById("output8").innerText = output.trim();
    }

    function chapter9() {
      var student = {name:"Ali", age:18, grade:"A"};
      var output = "Name: "+student.name+", Age: "+student.age+", Grade: "+student.grade;
      document.getElementById("output9").innerText = output;
    }

    function chapter10() {
      var num = prompt("Enter a number:");
      var output = (num % 2 === 0) ? num + " is Even" : num + " is Odd";
      document.getElementById("output10").innerText = output;
    }

    function chapter11() {
      document.getElementById("output11").innerText = "Hello from JavaScript!";
    }