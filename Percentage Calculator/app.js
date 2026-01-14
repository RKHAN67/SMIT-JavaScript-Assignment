let sub1 = prompt("Enter marks obtained in English:");
let sub2 = prompt("Enter marks obtained in Mathematics:");
let sub3 = prompt("Enter marks obtained in Science:");

let totalMarksPerSubject = prompt("Enter total marks for each subject:");

sub1 = Number(sub1);
sub2 = Number(sub2);
sub3 = Number(sub3);
totalMarksPerSubject = Number(totalMarksPerSubject);

let totalObtained = sub1 + sub2 + sub3;
let totalMarks = totalMarksPerSubject * 3;
let percentage = (totalObtained / totalMarks) * 100;

let grade;

if(percentage >= 90) {
   grade = "A+";
} else if(percentage >= 80) {
   grade = "A";
} else if(percentage >= 70) {
  grade = "B";
} else if(percentage >= 60) {
    grade = "C";  
} else if(percentage >= 50) {
    grade = "D";  
} else {
  grade = 'F';
}

alert(
  "Total Marks Obtained: " + totalObtained + "\n" +
  "Total Marks: " + totalMarks + "\n" +
  "Percentage: " + percentage.toFixed(2) + "%" + "\n" +
  "Grade: " + grade
);

document.getElementById("result").innerHTML =
  "<strong>Subject 1:</strong> " + sub1 + " / " + totalMarksPerSubject + "<br>" +
  "<strong>Subject 2:</strong> " + sub2 + " / " + totalMarksPerSubject + "<br>" +
  "<strong>Subject 3:</strong> " + sub3 + " / " + totalMarksPerSubject + "<br>" +
  "<strong>Total Obtained:</strong> " + totalObtained + " / " + totalMarks + "<br>" +
  "<strong>Percentage:</strong> " + percentage.toFixed(2) + "%" + "<br>" +
  "<strong>Grade :</strong> " + grade;