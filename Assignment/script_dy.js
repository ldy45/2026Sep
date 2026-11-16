function validateForm() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

var usernameRule = /^[a-zA-Z0-9]+$/;
var passwordRule = /^[!-~]+$/;
var letterRule = /[a-zA-Z]/;
var symbolRule = /[^a-zA-Z0-9]/;

if (username == "") {
  alert("Please enter your username.");
}
else if (usernameRule.test(username) == false) {
alert("Username can only contain English letters and numbers.");
}
else if (password == "") {
alert("Please enter your password.");
}
else if (passwordRule.test(password) == false) {
alert("Password can only contain English letters, numbers and symbols.");
}
else if (password.length < 8) {
alert("Password must be at least 8 characters.");
}
else if (letterRule.test(password) == false) {
alert("Password must contain at least one English letter.");
}
else if (symbolRule.test(password) == false) {
alert("Password must contain at least one symbol (e.g. ! @ # $).");
}
else {
alert("Welcome, " + username + "!");
}
}


function ShowPW() {
var password = document.getElementById("password");
var PWBtn = document.getElementById("PWBtn");

if (password.type == "password") {
password.type = "text";
PWBtn.innerHTML = "Hide Password";
}

else {
password.type = "password";
PWBtn.innerHTML = "Show Password";
}
}

function changeBg(id, color) {
document.getElementById(id).style.backgroundColor = color;
}
