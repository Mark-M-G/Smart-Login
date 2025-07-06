// // ! Select html elements
// var signUp = document.querySelector("#sign-a");
// var logIn = document.querySelector("#login-a");
// var loginEmail = document.querySelector("#login-email");
// var loginPass = document.querySelector("#login-pass");
// var loginBtn = document.querySelector("#login-btn");
// var signName = document.querySelector("#sign-name");
// var signEmail = document.querySelector("#sign-email");
// var signPass = document.querySelector("#sign-pass");
// var signBtn = document.querySelector("#sign-btn");
// var loginBox = document.querySelector("#Login-Box");
// var signupBox = document.querySelector("#SignUp-Box");
// // console.log(signUp,logIn , loginEmail ,loginPass , loginBtn , signName , signEmail , signPass ,  signBtn );
// // ! global variables__________
// var allUsers = [];
// // ! Show Signup
// var showSignUp = function () {
//   signupBox.classList.remove("d-none");
//   loginBox.classList.add("d-none");
// };

// // ! show login
// var showLogin = function () {
//   signupBox.classList.add("d-none");
//   loginBox.classList.remove("d-none");
// };
// // !----Save user data to local storage
// function saveToLocalStorage() {
//   localStorage.setItem("users", JSON.stringify(allUsers));
// }

// // ! _---------get user data from local storage
// function getDataFromLocalStorage() {
//   allUsers = JSON.parse(localStorage.getItem("users"));
// }
// // ! check if there is data in local storage
// if (localStorage.getItem("users")) {
//   getDataFromLocalStorage();
// }

// // ! add event to html element
// signUp.addEventListener("click", function () {
//   showSignUp();
// });
// logIn.addEventListener("click", showLogin);

// // ! register function
// var registFun = function () {
//   var newPerson = {
//     name: signName.value,
//     email: signEmail.value,
//     password: signPass.value,
//   };
//   // ! login function
// var loginFun = function() {
//   var newPerson = {
//     email: loginEmail.value,
//     password: loginPass.value,

//   };
//   // ! check if user exists
//   var userExists = allUsers.some(function(user) {
//     return user.email === newPerson.email && user.password === newPerson.password;
//   });
//   // ! if user exists, show alert
//   if (userExists) {
//     alert("Login successful!");
//   } else {
//     alert("Invalid email or password.");
//   }
//   // ! check if user already exists
//   var userExists = allUsers.some(function(user) {
//     return user.email === newPerson.email;
//   });
//   // ! if user already exists, show alert
//   if (userExists) {
//     alert("User already exists with this email.");
//     return;
//   }
//   // ! if user does not exist, add to array
//   allUsers.push(newPerson);
//   alert("Registration successful!");
//   // ! save to local storage
//   saveToLocalStorage();
//   // ! clear input fields
//   signName.value = "";
//   signEmail.value = "";
//   signPass.value = "";
//   loginEmail.value = "";
//   loginPass.value = "";

// };
//   // ! -- save curent user in array
//   allUsers.push(newPerson);
// // !----send all users to local storage
//    saveToLocalStorage();
// };
// signBtn.addEventListener("click", registFun);
// // console.log(allUsers);
// // !! add event to login button
// loginBtn.addEventListener("click", function () {
//   loginFun();
// }
// );






// // ! Select html elements
// var signUp = document.querySelector("#sign-a");
// var logIn = document.querySelector("#login-a");
// var loginEmail = document.querySelector("#login-email");
// var loginPass = document.querySelector("#login-pass");
// var loginBtn = document.querySelector("#login-btn");
// var signName = document.querySelector("#sign-name");
// var signEmail = document.querySelector("#sign-email");
// var signPass = document.querySelector("#sign-pass");
// var signBtn = document.querySelector("#sign-btn");
// var loginBox = document.querySelector("#Login-Box");
// var signupBox = document.querySelector("#SignUp-Box");
// var welcomeBox = document.querySelector("#welcome-box");
// var userNameDisplay = document.querySelector("#user-name");
// var logoutBtn = document.querySelector("#logout-btn");

// // ! global variables
// var allUsers = [];

// // ! Show Signup
// var showSignUp = function () {
//   signupBox.classList.remove("d-none");
//   loginBox.classList.add("d-none");
// };

// // ! Show Login
// var showLogin = function () {
//   signupBox.classList.add("d-none");
//   loginBox.classList.remove("d-none");
// };

// // ! Save user data to local storage
// function saveToLocalStorage() {
//   localStorage.setItem("users", JSON.stringify(allUsers));
// }

// // ! Get user data from local storage
// function getDataFromLocalStorage() {
//   allUsers = JSON.parse(localStorage.getItem("users")) || [];
// }

// // ! Check if there is data in local storage
// if (localStorage.getItem("users")) {
//   getDataFromLocalStorage();
// }

// // ! Add event to html elements
// signUp.addEventListener("click", showSignUp);
// logIn.addEventListener("click", showLogin);

// // ! Register function
// var registFun = function () {
//   var newPerson = {
//     name: signName.value,
//     email: signEmail.value,
//     password: signPass.value,
//   };
//   // ! Check if user already exists
//   var userExists = allUsers.some(function (user) {
//     return user.email === newPerson.email;
//   });
//   if (userExists) {
//     alert("User already exists with this email.");
//     return;
//   }
//   // ! If user does not exist, add to array
//   allUsers.push(newPerson);
//   alert("Registration successful!");
//   // ! Save to local storage
//   saveToLocalStorage();
//   // ! Clear input fields
//   signName.value = "";
//   signEmail.value = "";
//   signPass.value = "";
// };

// // ! Login function
// var loginFun = function () {
//   var loginPerson = {
//     email: loginEmail.value,
//     password: loginPass.value,
//   };
//   // ! Check if user exists with matching email and password
//   var userExists = allUsers.some(function (user) {
//     return (
//       user.email === loginPerson.email && user.password === loginPerson.password
//     );
//   });
//   if (userExists) {
//     alert("Login successful!");
//     loginEmail.value = "";
//     loginPass.value = "";
//   } else {
//     alert("Invalid email or password.");
//   }
// };

// signBtn.addEventListener("click", registFun);
// loginBtn.addEventListener("click", loginFun);

// // ! Show welcome box if user is logged in
// // function showWelcomeBox(user) {
// //   welcomeBox.classList.remove("d-none");
// //   loginBox.classList.add("d-none");
// //   signupBox.classList.add("d-none");
// //   // Display the user's name in the welcome box
// //   userNameDisplay.textContent = user.name;
// // }
// // // !_______show welcome box when user is logged in as a home page after clicking ok on alert
// // function handleLoginSuccess(user) {
// //   alert("Welcome, " + user.name + "!");
// //   showWelcomeBox(user);
// // }
// var loginFun = function () {
//   var loginPerson = {
//     email: loginEmail.value,
//     password: loginPass.value,
//   };
//   // Find the user object
//   var user = allUsers.find(function (user) {
//     return (
//       user.email === loginPerson.email && user.password === loginPerson.password
//     );
//   });
//   if (user) {
//     alert("Login successful!");
//     loginEmail.value = "";
//     loginPass.value = "";
//     showWelcomeBox(user); // Show welcome box and hide others
//   } else {
//     alert("Invalid email or password.");
//   }
// };
// // ! Add event listener for logout button
// logoutBtn.addEventListener("click", logout);




// // ! Logout function
// function logout() {
//   welcomeBox.classList.add("d-none");
//   loginBox.classList.remove("d-none");

//   userNameDisplay.textContent = "";
//   alert("You have successfully logged out.");
// }



// Select html elements
var signUp = document.querySelector("#sign-a");
var logIn = document.querySelector("#login-a");
var loginEmail = document.querySelector("#login-email");
var loginPass = document.querySelector("#login-pass");
var loginBtn = document.querySelector("#login-btn");
var signName = document.querySelector("#sign-name");
var signEmail = document.querySelector("#sign-email");
var signPass = document.querySelector("#sign-pass");
var signBtn = document.querySelector("#sign-btn");
var loginBox = document.querySelector("#Login-Box");
var signupBox = document.querySelector("#SignUp-Box");
var welcomeBox = document.querySelector("#welcome-box");
var userNameDisplay = document.querySelector("#user-name");
var logoutBtn = document.querySelector("#logout-btn");

// Global variables
var allUsers = [];

// Show Signup
function showSignUp() {
  signupBox.classList.remove("d-none");
  loginBox.classList.add("d-none");
  welcomeBox.classList.add("d-none");
}

// Show Login
function showLogin() {
  signupBox.classList.add("d-none");
  loginBox.classList.remove("d-none");
  welcomeBox.classList.add("d-none");
}

// Save user data to local storage
function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(allUsers));
}

// Get user data from local storage
function getDataFromLocalStorage() {
  allUsers = JSON.parse(localStorage.getItem("users")) || [];
}

// Check if there is data in local storage
if (localStorage.getItem("users")) {
  getDataFromLocalStorage();
}

// Add event to html elements
signUp.addEventListener("click", showSignUp);
logIn.addEventListener("click", showLogin);

// Register function
var registFun = function () {
  var newPerson = {
    name: signName.value,
    email: signEmail.value,
    password: signPass.value,
  };
  // Check if user already exists
  var userExists = allUsers.some(function (user) {
    return user.email === newPerson.email;
  });
  if (userExists) {
    alert("User already exists with this email.");
    return;
  }
  // If user does not exist, add to array
  allUsers.push(newPerson);
  alert("Registration successful!");
  // Save to local storage
  saveToLocalStorage();
  // Clear input fields
  signName.value = "";
  signEmail.value = "";
  signPass.value = "";
  showLogin();
};

// Login function
var loginFun = function () {
  var loginPerson = {
    email: loginEmail.value,
    password: loginPass.value,
  };
  // Find the user object
  var user = allUsers.find(function (user) {
    return (
      user.email === loginPerson.email && user.password === loginPerson.password
    );
  });
  if (user) {
    alert("Welcome, " + user.name + "!");
    loginEmail.value = "";
    loginPass.value = "";
    showWelcomeBox(user); // Show welcome box and hide others
  } else {
    alert("Invalid email or password.");
  }
};

// Show welcome box and hide others
function showWelcomeBox(user) {
  welcomeBox.classList.remove("d-none");
  loginBox.classList.add("d-none");
  signupBox.classList.add("d-none");
  userNameDisplay.textContent = user.name;
}

// Logout function
function logout() {
  welcomeBox.classList.add("d-none");
  loginBox.classList.remove("d-none");
  signupBox.classList.add("d-none");
  userNameDisplay.textContent = "";
  alert("You have successfully logged out.");
}

// Event listeners
signBtn.addEventListener("click", registFun);
loginBtn.addEventListener("click", loginFun);
logoutBtn.addEventListener("click", logout);