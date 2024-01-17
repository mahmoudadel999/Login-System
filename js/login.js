var inputEmailLogin = document.getElementById('inputEmailLogin'),
  inputPassLogin = document.getElementById('inputPassLogin'),
  logIn = document.getElementById('logIn');

var listUser = [];
if (localStorage.getItem('users') != null) {
  listUser = JSON.parse(localStorage.getItem('users'));
}

function login() {
  if (checkInputsLogin() == true) {
    getAlert('All inputs atr required', 'red');
  } else {
    for (let i = 0; i < listUser.length; i++) {
      if (
        listUser[i].userPass == inputPassLogin.value &&
        listUser[i].userEmail == inputEmailLogin.value
      ) {
        localStorage.setItem('userName', listUser[i].userName);
        window.location.href = './home.html';
      } else {
        getAlert('Wrong Email or Password', 'red');
      }
    }
  }
}

logIn.addEventListener('click', login);

function getAlert(message, color) {
  inCorrect.innerHTML = message;
  inCorrect.style.color = color;
}

function checkInputsLogin() {
  if (inputEmailLogin.value == '' || inputPassLogin.value == '') {
    return true;
  } else {
    return false;
  }
}
