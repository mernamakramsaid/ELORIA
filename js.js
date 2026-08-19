
//=============Form =======================
var loginTab = document.getElementById("loginTab");
var signupTab = document.getElementById("signupTab");
var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm");

//========login Tab==============

loginTab.onclick = function () {
  loginTab.className = "tab active";
  signupTab.className = "tab";
  
  loginForm.className = "form active";
  signupForm.className = "form";
};

//========signup Tab==============

signupTab.onclick = function () {
  signupTab.className = "tab active";
  loginTab.className = "tab";
  
  signupForm.className = "form active";
  loginForm.className = "form";
};

//========login submit==============

var loginButton = loginForm.querySelector(".btn-gold");
loginButton.onclick = function (event) {
  event.preventDefault();
  document.getElementById("loginMsg").innerHTML = "Logged in successfully .";
  
  setTimeout(function () {
    document.getElementById("loginMsg").innerHTML = "";
    loginForm.reset();
  }, 2000);
};

//========signup submit==============

var signupButton = signupForm.querySelector(".btn-gold");
signupButton.onclick = function (event) {
  event.preventDefault();
  document.getElementById("signupMsg").innerHTML = "Account created successfully.";

  setTimeout(function () {
    document.getElementById("signupMsg").innerHTML = "";
    signupForm.reset();
  }, 2000);
};


// ====================heart====================
var hearts = document.querySelectorAll(".heart");
hearts.forEach(function (heart) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("liked");
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
  });
});


// ==================== Buy now button ====================

var buyButtons = document.querySelectorAll(".but1, .but2");

buyButtons.forEach(function(button) {
    button.onclick = function() {
        button.innerHTML = "Added";
    };
});