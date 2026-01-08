 var sub1 = prompt("Enter marks obtained in Subject 1:");
    var sub2 = prompt("Enter marks obtained in Subject 2:");
    var sub3 = prompt("Enter marks obtained in Subject 3:");

    var totalMarksPerSubject = prompt("Enter total marks for each subject:");

    sub1 = Number(sub1);
    sub2 = Number(sub2);
    sub3 = Number(sub3);
    totalMarksPerSubject = Number(totalMarksPerSubject);

    var totalObtained = sub1 + sub2 + sub3;
    var totalMarks = totalMarksPerSubject * 3;
    var percentage = (totalObtained / totalMarks) * 100;

    alert(
      "Total Marks Obtained: " + totalObtained + "\n" +
      "Total Marks: " + totalMarks + "\n" +
      "Percentage: " + percentage.toFixed(2) + "%"
    );

    document.getElementById("result").innerHTML = 
      "<strong>Subject 1:</strong> " + sub1 + " / " + totalMarksPerSubject + "<br>" +
      "<strong>Subject 2:</strong> " + sub2 + " / " + totalMarksPerSubject + "<br>" +
      "<strong>Subject 3:</strong> " + sub3 + " / " + totalMarksPerSubject + "<br><br>" +
      "<strong>Total Obtained:</strong> " + totalObtained + " / " + totalMarks + "<br>" +
      "<strong>Percentage:</strong> " + percentage.toFixed(2) + "%";