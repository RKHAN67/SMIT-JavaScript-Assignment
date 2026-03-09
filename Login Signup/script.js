let localStrVal = localStorage.getItem("users")

let users = []

if(localStrVal){
users = JSON.parse(localStrVal)
}

function signupUser(){

let userName = document.getElementById("userName").value
let userEmail = document.getElementById("userEmail").value
let userPassword = document.getElementById("userPassword").value

let helperText = document.getElementById("helperText")
helperText.innerText = ""

if(userName=="" || userEmail=="" || userPassword==""){
helperText.innerText="Please fill all fields"
return
}

for(let i=0;i<users.length;i++){
if(users[i].email==userEmail){
helperText.innerText="Email already registered"
return
}
}

let userObj={
name:userName,
email:userEmail,
password:userPassword
}

users.push(userObj)

localStorage.setItem("users",JSON.stringify(users))

helperText.style.color="green"
helperText.innerText="Registration Successful"

}

function loginAccount(){

let userEmail=document.getElementById("userEmail").value
let userPassword=document.getElementById("userPassword").value

let helperText=document.getElementById("helperText")
helperText.innerText=""

let currentUser=null

for(let i=0;i<users.length;i++){
if(users[i].email==userEmail){
currentUser=users[i]
break
}
}

if(!currentUser){
helperText.innerText="Account not found"
return
}

if(currentUser.password!==userPassword){
helperText.innerText="Password incorrect"
return
}

localStorage.setItem("currentUser",JSON.stringify(currentUser))

window.location.href="dashboard.html"

}

function logoutUser(){
localStorage.removeItem("currentUser")
window.location.href="login.html"
}

let user=JSON.parse(localStorage.getItem("currentUser"))

if(user && document.getElementById("welcomeUser")){
document.getElementById("welcomeUser").innerText="Welcome "+user.name
}