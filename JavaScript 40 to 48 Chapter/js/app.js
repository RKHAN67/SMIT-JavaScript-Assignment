function showAlert() {
  alert('You clicked the link!');
}

function mobileAlert() {
  alert('Thanks for purchasing a mobile phone!');
} 

function addStudent() {
  let name = document.getElementById('name').value;
  let studentClass = document.getElementById('class').value;
  if (name === '' || studentClass === '') {
    alert('Please fill all fields!');
    return;
  }
  let table = document.getElementById('studentTable');
  let row = table.insertRow();
  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = studentClass;
  row.insertCell(2).innerHTML =
    '<button onclick="deleteRow(this)">Delete</button>';
  document.getElementById('name').value = '';
  document.getElementById('class').value = '';
}

function deleteRow(btn) {
  btn.parentNode.parentNode.remove();
}

function changePic() {
  document.getElementById('changeImage').src = './images/2.jpeg';
}

function originalPic() {
  document.getElementById('changeImage').src = './images/1.jpeg';
}

let count = 0;
function increase() {
  count++;
  document.getElementById('counterValue').innerHTML = count;
}
function decrease() {
  count--;
  document.getElementById('counterValue').innerHTML = count;
}
